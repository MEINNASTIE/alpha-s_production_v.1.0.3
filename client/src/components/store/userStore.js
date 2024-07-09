import { create } from 'zustand';
import Cookies from 'js-cookie';

const useUserStore = create((set) => ({
  user: null,
  role: null,
  passwordChanged: false,
  initialize: () => {
    const storedUser = Cookies.get('user');
    if (storedUser) {
      const { user, role, passwordChanged } = JSON.parse(storedUser);
      set({ user, role, passwordChanged });
    }
  },
  login: async (username, password) => {
    try {
      const response = await fetch('http://localhost:3000/users?username=' + username + '&password=' + password);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const users = await response.json();
      if (users.length === 0) {
        throw new Error('Invalid username or password');
      }
      const { user, role, passwordChanged } = users[0];
      set({ user, role, passwordChanged: passwordChanged || false });
      Cookies.set('user', JSON.stringify({ user, role, passwordChanged: passwordChanged || false }), { expires: 1 });
      console.log('Login successful. User:', user, 'Password Changed:', passwordChanged);
    } catch (error) {
      console.error('Login failed:', error);
      throw new Error('Invalid username or password');
    }
  },
  logout: () => {
    Cookies.remove('user');
    set({ user: null, role: null, passwordChanged: false });
  },
  changePassword: async (oldPassword, newPassword) => {
    const storedUser = Cookies.get('user');
    if (!storedUser) {
      throw new Error('No user logged in');
    }
    const { user } = JSON.parse(storedUser);

    try {
      const response = await fetch('http://localhost:3000/users?username=' + user + '&password=' + oldPassword);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const users = await response.json();
      if (users.length === 0) {
        throw new Error('Old password is incorrect');
      }

      const updateResponse = await fetch(`http://localhost:3000/users/${users[0].id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password: newPassword, passwordChanged: true })
      });

      if (!updateResponse.ok) {
        throw new Error('Failed to update password');
      }

      set({ passwordChanged: true });
      Cookies.set('user', JSON.stringify({ ...users[0], passwordChanged: true }), { expires: 1 });

      console.log('Password changed successfully');
    } catch (error) {
      console.error('Password change failed:', error);
      throw error;
    }
  }
}));

export default useUserStore;

