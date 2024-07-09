import { h, Fragment } from 'preact';
import './settings.css'
import Download from '../../../assets/download-solid.svg'
import Delete from '../../../assets/trash-can-solid.svg'
import { Save } from '../../buttons/Save'
import { useContext, useEffect, useState } from 'preact/hooks';
import { SaveSuccess } from '../../modals/Warning_three';
import useNavStore from '../../store/navStore';
import { HeaderAlpha } from '../../layout/Header_main';
import { MainNav } from '../../layout/Main_Nav';
import { SecondaryNav } from '../../layout/Secondary_Nav';
import { FooterAlpha } from '../../layout/Footer_main';
import { TranslateContext } from '@denysvuika/preact-translate';
export function Users() {
    const [admin, setAdmin] = useState(null);
    const [users, setUsers] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { setActiveNav } = useNavStore();
    const [isFormChanged, setIsFormChanged] = useState(false);
    const [isSaveVisible, setIsSaveVisible] = useState(true);
    const { t } = useContext(TranslateContext);

    useEffect(() => {
        fetch('http://localhost:3000/users') 
            .then(response => response.json())
            .then(data => {
                const adminUser = data.find(user => user.role === 0);
                const otherUsers = data.filter(user => user.role !== 0 && user.role !== 2);
                setAdmin(adminUser);
                setUsers(otherUsers);
                setUsers([...otherUsers, { id: null, user: '', password: '', role: 1 }, { id: null, user: '', password: '', role: 1 }]);
            })
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    const handleDeleteUser = (index) => {
        const userToDelete = users[index];
        if (userToDelete.id !== null) {
            fetch(`http://localhost:3000/users/${userToDelete.id}`, {
                method: 'DELETE'
            })
            .then(response => {
                if (response.ok) {
                    const newUsers = users.filter((_, i) => i !== index);
                    setUsers(newUsers);
                    setIsFormChanged(true);
                }
            })
            .catch(error => console.error('Error deleting user:', error));
        } else {
            const newUsers = users.filter((_, i) => i !== index);
            setUsers(newUsers);
        }
    };

    const handleSave = () => {
        const savePromises = users.map(user => {
            if (user.id === null && user.user && user.password) { 
                return fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                .then(response => response.json())
                .then(newUser => {
                    setUsers(users.map(u => (u.id === null && u.user === user.user && u.password === user.password) ? newUser : u));
                });
            } else {
                return fetch(`http://localhost:3000/users/${user.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                });
            }
        });

        Promise.all(savePromises)
            .then(() => {
                setIsFormChanged(false);
                setIsModalVisible(true);
            })
            .catch(error => console.error('Error saving users:', error));
    };


    const handleNavChange = (navItem) => {
        setActiveNav(navItem);
    };

    const handleModalClick = () => {
        setIsModalVisible(true);
    };

    const handleModalClose = () => {
        setIsModalVisible(false);
        setIsSaveVisible(false);
    };

    const handleInputChange = (event, index, field) => {
        const newUsers = [...users];
        newUsers[index][field] = event.target.value;
        setUsers(newUsers);
        setIsFormChanged(true);
    };

    const handleAdminInputChange = (event, field) => {
        const newAdmin = { ...admin, [field]: event.target.value };
        setAdmin(newAdmin);
        setIsFormChanged(true);
    };

    return (
        <>
            <HeaderAlpha />
            <div className="alpha_main">
                <MainNav onNavChange={handleNavChange} />
                <SecondaryNav />
                <div className="users_table">
                    <div className="first_row">
                        <h3>{t('users')}</h3>
                        <h3>{t('password')}</h3>
                        <h3>{t('password')}</h3>
                        <h3>{t('admin')}</h3>
                    </div>
                    {admin && (
                        <div className="row">
                            <h3>{t('user')}</h3>
                            <input 
                                type="text" 
                                value={admin.user} 
                                onChange={(event) => handleAdminInputChange(event, 'user')} 
                                readOnly
                            />
                            <h3>{t('password')}</h3>
                            <input 
                                type="password" 
                                value={admin.password} 
                                onChange={(event) => handleAdminInputChange(event, 'password')} 
                                readOnly
                            />
                            <h3>{t('password')}</h3>
                            <input 
                                type="password" 
                                value={admin.password} 
                                onChange={(event) => handleAdminInputChange(event, 'password')} 
                                readOnly
                            />
                            <div className="row_two">
                                <label>
                                    <input type="checkbox" className="checkbox" checked={admin.role === 0} readOnly />
                                </label>
                                <div className="icons">
                                    <img src={Download} alt="Download_icon" />
                                </div>
                            </div>
                        </div>
                    )}
                    {users.map((user, index) => (
                        <div className="row" key={index}>
                            <h3>{t('user')}</h3>
                            <input 
                                type="text" 
                                value={user.user} 
                                onChange={(event) => handleInputChange(event, index, 'user')} 
                            />
                            <h3>{t('password')}</h3>
                            <input 
                                type="password" 
                                value={user.password} 
                                onChange={(event) => handleInputChange(event, index, 'password')} 
                            />
                            <h3>{t('password')}</h3>
                            <input 
                                type="password" 
                                value={user.password} 
                                onChange={(event) => handleInputChange(event, index, 'password')} 
                            />
                            <div className="row_two">
                                <label>
                                    <input type="checkbox" className="checkbox" checked={user.role === 0} readOnly />
                                </label>
                                <div className="icons">
                                    <img src={Download} alt="Download_icon"/>
                                    <img src={Delete} alt="Delete_icon" onClick={() => handleDeleteUser(index)} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="action_buttons">
                    {isFormChanged && isSaveVisible &&
                    <div onClick={handleModalClick}>
                        <span onClick={handleSave}>
                        <Save />
                        </span>
                    </div>
                    }
                    {isModalVisible && <SaveSuccess showModal={isModalVisible} onClose={handleModalClose} />}
                </div>
            </div>
            <FooterAlpha />
        </>
    );
}