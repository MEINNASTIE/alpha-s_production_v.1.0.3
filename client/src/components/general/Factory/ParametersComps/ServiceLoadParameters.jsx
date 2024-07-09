import { h, Fragment } from 'preact';
import { useEffect, useState, useRef } from 'preact/hooks';
import '../factory.css';
import { Load } from '../../../buttons/Load';
import { Exit } from '../../../buttons/Exit';
import { LoadSuccess } from '../../../modals/Warning_one';
import { useLocation } from 'preact-iso';
import { FooterAlpha } from '../../../layout/Footer_main';
import { HeaderAlpha } from '../../../layout/Header_main';
import { MainNav } from '../../../layout/Main_Nav';
import { SecondaryNav } from '../../../layout/Secondary_Nav';
import useNavStore from '../../../store/navStore';
const fetchData = (start, limit) => {
  // simulated fake files data
  const newData = [];
  for (let i = start; i < start + limit; i++) {
    newData.push({
      id: i,
      upf2FileName: `AS000123_00${i}_${i}.UPF2`,
      isSelected: false
    });
  }
  return newData;
};
// simulated fake files data end
export function ServiceLoadParameters() {
  const { url } = useLocation();
  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const observer = useRef(null);
  const { setActiveNav } = useNavStore();

  const handleNavChange = (navItem) => {
    setActiveNav(navItem);
  };

  useEffect(() => {
    loadMore();
  }, []);

  const loadMore = () => {
    const newItems = fetchData(data.length, 20);
    setData(prevData => [...prevData, ...newItems]);
    if (newItems.length < 20) {
      setHasMore(false);
    }
  };

  const lastElementRef = useRef(null);

  useEffect(() => {
    if (!hasMore) return;

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPage(prevPage => prevPage + 1);
      }
    });

    if (lastElementRef.current) {
      observer.current.observe(lastElementRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [data, hasMore]);

  useEffect(() => {
    if (page > 0) {
      loadMore();
    }
  }, [page]);

  const handleRowClick = (id) => {
    setSelectedRow(id === selectedRow ? null : id);
  };

  const handleLoadClick = () => {
    if (selectedRow !== null) {
      setIsModalVisible(true);
      setTimeout(() => {
        setIsModalVisible(false);
        setSelectedRow(null);
      }, 10000); 
    }
  };

  return (
    <>
    <HeaderAlpha />
      <div className="alpha_main">
          <MainNav onNavChange={handleNavChange} />
          <div className="hidden">
            <SecondaryNav/>
          </div>
      <div className="data_box load_parameters">
        <div>
          <h3 className="special_h3">Load parameters from file</h3>
        </div>
        <div className="table_container_mobile">
          <table>
            <thead>
              <tr>
                <th>Parameter File Name</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  ref={index === data.length - 1 ? lastElementRef : null}
                  className={item.id === selectedRow ? 'selected' : ''}
                  onClick={() => handleRowClick(item.id)}
                >
                  <td>{item.upf2FileName}.PAR</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="parameter_buttons">
          <div onClick={handleLoadClick} disabled={selectedRow === null}>
            <Load />
          </div>
          <div>
          <a href="/alpha-s/service-factory" class={url == 'parameters' && 'active'}>
            <Exit />
          </a>
          </div>
        </div>
      </div>
      {isModalVisible && <LoadSuccess message="Parameters were successfully loaded!" onClose={() => setIsModalVisible(false)} />}
      </div>
      <FooterAlpha />
    </>
  );
}
