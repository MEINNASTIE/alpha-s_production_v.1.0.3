import { h } from 'preact';
import { useState } from 'preact/hooks';
import useUserStore from '../../components/store/userStore';
import './modals.css';

export function AdminChangePassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { changePassword, passwordChanged } = useUserStore();

  const handleOldPasswordChange = (event) => {
    setOldPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('New passwords do not match.');
      return;
    }

    if (newPassword === '' || confirmPassword === '') {
      setError('New password cannot be empty.');
      return;
    }

    try {
      await changePassword(oldPassword, newPassword);
      setError('');
      console.log('Password changed successfully');
    } catch (error) {
      setError(error.message);
    }
  };

  if (passwordChanged) {
    return null;
  }

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Old Password:
            <input
              type={showPassword ? 'text' : 'password'}
              value={oldPassword}
              onChange={handleOldPasswordChange}
              className="text"
            />
          </label>
        </div>
        <div>
          <label>
            New Password:
            <input
              type={showPassword ? 'text' : 'password'}
              value={newPassword}
              onChange={handleNewPasswordChange}
              className="text"
            />
          </label>
        </div>
        <div>
          <label>
            Confirm New Password:
            <input
              type={showPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="text"
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            Show Passwords
          </label>
        </div>
        {error && <span style={{ color: 'red' }}>{error}</span>}
        <div>
          <button type="submit">Change Password</button>
        </div>
      </form>
    </div>
  );
}


