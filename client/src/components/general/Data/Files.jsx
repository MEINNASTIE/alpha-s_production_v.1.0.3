import { h, Fragment } from 'preact';
import { useState, useEffect, useRef, useContext } from 'preact/hooks';
import '../Main/main.css';
import './data.css';
import { Delete } from '../../buttons/Delete';
import { Download } from '../../buttons/Download';
import { HeaderAlpha } from '../../layout/Header_main';
import { FooterAlpha } from '../../layout/Footer_main';
import { MainNav } from '../../layout/Main_Nav';
import { SecondaryNav } from '../../layout/Secondary_Nav';
import useNavStore from '../../store/navStore';
import { TranslateContext } from '@denysvuika/preact-translate';
const fetchData = (page, limit) => {
  const start = page * limit;
  const end = start + limit;
  if (start >= 1000) return [];

  // fake files data
  const newData = [];
  for (let i = start; i < end && i < 1000; i++) {
    newData.push({
      id: i,
      experiment: `003${i}`,
      start: `20.05.2024.`,
      end: `22.05.2024.`,
      mode: `${i} min, diff`,
      upf2FileName: `AS000123_00${i}_${i}.UPF2`,
      isSelected: false
    });
  }
  return newData;
};
// fake files data end
function Pagination({ currentPage, totalPages, onPageChange }) {
  const { t } = useContext(TranslateContext);
  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 0}
      >
        {t('previous')}
      </button>
      <span>
        {currentPage + 1} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages - 1}
      >
        {t('next')}
      </button>
    </div>
  );
}
function ColumnSelector({ columns, toggleColumn }) {
  return (
    <div className="column-selector">
    {columns.map(column => (
      <label key={column.key}>
        <input
          type="checkbox"
          checked={column.visible}
          onChange={() => toggleColumn(column.key)}
          name="special_selector_column"
        />
        <div><span></span><p>{column.label}</p></div>
      </label>
    ))}
    </div>
  );
}
export function Files() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(Math.ceil(1000 / 20)); // Assuming 20 items per page
  const [selectedRows, setSelectedRows] = useState([]);
  const [visibleColumns, setVisibleColumns] = useState({
    experiment: true,
    start: true,
    end: true,
    mode: true
  });
  const { setActiveNav } = useNavStore();
  const { t } = useContext(TranslateContext);

  const handleNavChange = (navItem) => {
    console.log('Navigation changed to:', navItem);
    setActiveNav(navItem);
  };

  useEffect(() => {
    loadPage(currentPage);
  }, [currentPage]);

  const loadPage = (page) => {
    const newItems = fetchData(page, 20);
    setData(newItems);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleRowClick = (id) => {
    setData(prevData =>
      prevData.map(row =>
        row.id === id ? { ...row, isSelected: !row.isSelected } : row
      )
    );
    setSelectedRows(prevSelectedRows =>
      prevSelectedRows.includes(id)
        ? prevSelectedRows.filter(rowId => rowId !== id)
        : [...prevSelectedRows, id]
    );
  };

  const handleCheckboxChange = (id) => {
    setData(prevData =>
      prevData.map(row =>
        row.id === id ? { ...row, isSelected: !row.isSelected } : row
      )
    );
    setSelectedRows(prevSelectedRows =>
      prevSelectedRows.includes(id)
        ? prevSelectedRows.filter(rowId => rowId !== id)
        : [...prevSelectedRows, id]
    );
  };

  const deleteSelectedRows = () => {
    setData(prevData => prevData.filter(row => !selectedRows.includes(row.id)));
    setSelectedRows([]);
  };

  const downloadSelectedRows = () => {
    const selectedData = data.filter(row => selectedRows.includes(row.id));
    const blob = new Blob([JSON.stringify(selectedData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'selected_rows.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const toggleColumn = (columnName) => {
    setVisibleColumns(prevColumns => ({
      ...prevColumns,
      [columnName]: !prevColumns[columnName]
    }));
  };

  return (
    <>
      <HeaderAlpha />
      <div className="alpha_main">
        <MainNav onNavChange={handleNavChange} />
        <SecondaryNav />
        <div className="files_box">
          <ColumnSelector
            columns={[
              { key: 'experiment', label: 'Experiment', visible: visibleColumns.experiment },
              { key: 'start', label: 'Start', visible: visibleColumns.start },
              { key: 'end', label: 'End', visible: visibleColumns.end },
              { key: 'mode', label: 'Mode', visible: visibleColumns.mode }
            ]}
            toggleColumn={toggleColumn}
          />
          <div className="table_container data_box">
            <table>
              <thead>
                <tr>
                  {visibleColumns.experiment && <th>{t('experiment')}</th>}
                  {visibleColumns.start && <th>{t('start')}</th>}
                  {visibleColumns.end && <th>{t('end')}</th>}
                  {visibleColumns.mode && <th>{t('mode')}</th>}
                  <th>UPF2 {t('file_name')}</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className={item.isSelected ? 'selected' : ''}
                  >
                    {visibleColumns.experiment && <td onClick={() => handleRowClick(item.id)}>{item.experiment}</td>}
                    {visibleColumns.start && <td onClick={() => handleRowClick(item.id)}>{item.start}</td>}
                    {visibleColumns.end && <td onClick={() => handleRowClick(item.id)}>{item.end}</td>}
                    {visibleColumns.mode && <td onClick={() => handleRowClick(item.id)}>{item.mode}</td>}
                    <td onClick={() => handleRowClick(item.id)}>{item.upf2FileName}</td>
                    <td className="special_files_row">
                      <input
                        type="checkbox"
                        checked={item.isSelected}
                        onChange={() => handleCheckboxChange(item.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        <div className="action_buttons_two">
          <div onClick={deleteSelectedRows} disabled={selectedRows.length === 0}>
            <Delete />
          </div>
          <div onClick={downloadSelectedRows} disabled={selectedRows.length === 0}>
            <Download />
          </div>
        </div>
      </div>
      <FooterAlpha />
    </>
  );
}






