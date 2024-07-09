import { h, Fragment } from 'preact';
import './factory.css';
import { useState } from 'preact/hooks';
import useNavStore from '../../store/navStore';
import { HeaderAlpha } from '../../layout/Header_main';
import { MainNav } from '../../layout/Main_Nav';
import { SecondaryNav } from '../../layout/Secondary_Nav';
import { FooterAlpha } from '../../layout/Footer_main';

const statusParameters = [
    // fake status parameters
    { id: '0x2306', label: 'Chamber admin system config flags', value: '0x00000002', path: '/alpha-s/chamber_admin_config_flags' },
    { id: '0x2307', label: 'Chamber factory system config flags', value: '0x00000003', path: '/alpha-s/chamber_factory_system_config_flags' },
    { id: '0x2308', label: 'Chamber system date', value: '0x00000003', path: '/alpha-s/chamber_system_date' },
    { id: '0x2309', label: 'Chamber system time', value: '08.09.2023.', path: '/alpha-s/chamber_system_time' },
    { id: '0x230A', label: 'Chamber total operation hours', value: '239', path: '/alpha-s/chamber_total_operation_hours' },
    { id: '0x230B', label: 'Chamber pump operation hours', value: '27', path: '/alpha-s/chamber_pump_operation_hours' },
    { id: '0x230C', label: 'Chamber RS232 baudrate', value: '4', path: '/alpha-s/chamber_rs232_baudrate' },
    { id: '0x230D', label: 'Chamber hardware version', value: '0x02000001', path: '/alpha-s/chamber_hardware_version' },
    // fake status parameters end
];
function ColumnSelector({ columns, toggleColumn }) {
  
    return (
        <>
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
        </>
    );
}
export function Parameter() {
    const { setActiveNav } = useNavStore();

    const handleNavChange = (navItem) => {
      setActiveNav(navItem);
    }
    const [visibleColumns, setVisibleColumns] = useState({
        PID: true,
        name: true,
        value: true,
    });

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
            <SecondaryNav/>
        <div className="table_parameter">
            <ColumnSelector columns={[
                { key: 'PID', label: 'PID', visible: visibleColumns.PID },
                { key: 'name', label: 'Name', visible: visibleColumns.name },
                { key: 'value', label: 'Value', visible: visibleColumns.value}
            ]}
            toggleColumn={toggleColumn}
            />
            <table>
                <thead>
                    <tr>
                        {visibleColumns.PID && <th>PID</th>}
                        {visibleColumns.name && <th>Name</th>}
                        {visibleColumns.value && <th>Value</th>}
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <td>0x2306</td>
                        <td>Chamber admin system config flags</td>
                        <td>0x00000002</td>
                    </tr>
                    <tr>
                        <td>0x2307</td>
                        <td>Chamber factory system config flags</td>
                        <td>0x00000003</td>
                    </tr>
                    <tr>
                        <td>0x2308</td>
                        <td>Chamber system date</td>
                        <td>0x00000003</td>
                    </tr>
                    <tr>
                        <td>0x2309</td>
                        <td>Chamber system time</td>
                        <td>08.09.2023.</td>
                    </tr>
                    <tr>
                        <td>0x230A</td>
                        <td>Chamber total operation hours</td>
                        <td>239</td>
                    </tr>
                    <tr>
                        <td>0x230B</td>
                        <td>Chamber RS232 baudrate</td>
                        <td>27</td>
                    </tr>
                    <tr>
                        <td>0x230C</td>
                        <td>Chamber RS232 baudrate</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>0x230D</td>
                        <td>Chamber hardware version</td>
                        <td>0x02000001</td>
                    </tr> */}
                    {statusParameters.map(param => (
                        <tr key={param.id}>
                            {visibleColumns.PID && <td>{param.id}</td>}
                            {visibleColumns.name && <td>{param.label}</td>}
                            {visibleColumns.value && <td>{param.value}</td>}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
        <FooterAlpha />
        </>
    );
}

