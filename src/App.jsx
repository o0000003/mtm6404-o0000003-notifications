import { useState } from "react";
import "./App.css";
import notificationsData from "./notifications";

function Notification({ children, onClear }) {
  return (
    <div className="notification">
      {children}
      <button onClick={onClear}>Clear</button>
    </div>
  );
}

function NotificationList({ notifications, onClearNotification }) {
  return (
    <div className="notifications-list">
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          onClear={() => onClearNotification(notification.id)}
        >
          <h3>{notification.title}</h3>
          <p>{notification.message}</p>
        </Notification>
      ))}
    </div>
  );
}

function ClearButton({ onClearAll, isDisabled }) {
  return (
    <button onClick={onClearAll} disabled={isDisabled}>
      Clear All
    </button>
  );
}

function App() {
  const [notifications, setNotifications] = useState(notificationsData);

  const handleClearNotification = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  const handleClearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="App">
      <h1>
        User Notifications (<span>{notifications.length}</span>)
      </h1>
      <NotificationList
        notifications={notifications}
        onClearNotification={handleClearNotification}
      />
      <ClearButton
        onClearAll={handleClearAllNotifications}
        isDisabled={notifications.length === 0}
      />
    </div>
  );
}

export default App;
