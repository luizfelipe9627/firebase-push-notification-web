import { useState } from "react";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import {app} from "./firebase/firebase-config.js";

const messaging = getMessaging(app);

function App() {
    const [token, setToken] = useState(null);

    const handleNotificationPermission = async () => {
        try {
            const permission = await Notification.requestPermission();
            if (permission === "granted") {
                const currentToken = await getToken(messaging, {
                    vapidKey: import.meta.env.VITE_VAPID_KEY,
                });
                console.log("Token:", currentToken);
                setToken(currentToken);
            } else {
                console.warn("Permissão não concedida");
            }
        } catch (err) {
            console.error("Erro ao obter o token:", err);
        }
    };

    onMessage(messaging, (payload) => {
        if (Notification.permission === "granted") {
            const { title, body } = payload.notification || {};
            new Notification(title, { body });
        }
    });

    return (
        <div className="container">
            <h1>React Firebase Push Notification</h1>
            <button onClick={handleNotificationPermission}>
                Ativar Notificações
            </button>
            {token && <p>Token gerado com sucesso!</p>}
        </div>
    );
}

export default App;
