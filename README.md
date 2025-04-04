# Firebase Push Notification Web

Este projeto é uma aplicação web que implementa **notificações push** utilizando **Firebase Cloud Messaging (FCM)** com **React**. Ele solicita permissão ao usuário, gera um **token de dispositivo** e exibe notificações diretamente no navegador quando uma mensagem push é recebida.

## Tecnologias Utilizadas

- **React** (Frontend)
- **Firebase Cloud Messaging (FCM)**
- **Firebase SDK para Web**
- **Docker** (para execução do projeto em um ambiente isolado)

## Como Configurar e Rodar o Projeto

### 1. Clonar o Repositório

```sh
git clone https://github.com/luizfelipe9627/firebase-push-notification-web.git
cd firebase-push-notification-web
```

### 2. Configurar as Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto e adicione as credenciais do Firebase:

```env
VITE_FIREBASE_API_KEY=SEU_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=SEU_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID=SEU_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=SEU_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=SEU_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID=SEU_APP_ID
VITE_FIREBASE_VALID_KEY=SEU_VALID_KEY
```

### 3. Instalar as Dependências

```sh
npm install
```

### 4. Executar a Aplicação Localmente

```sh
npm run dev
```

Acesse **http://localhost:8081** no navegador.

## Rodando com Docker

Se preferir rodar o projeto em um contêiner Docker, utilize os seguintes comandos:

```sh
docker compose up
```

Agora a aplicação estará disponível em **http://localhost:8081**.

## Funcionamento

1. O usuário acessa a aplicação e aperta o botão para permitir notificações.
2. Após a permissão, o navegador registra o dispositivo no Firebase Cloud Messaging e gera um **token**.
3. O backend pode utilizar esse token para enviar notificações push ao navegador do usuário.
4. Quando uma notificação é recebida, ela será exibida na tela do usuário mesmo que o site esteja minimizado.

## Como Enviar Notificações

Você pode enviar notificações para os dispositivos registrados usando o Firebase Cloud Messaging via **cURL**, **Postman** ou seu próprio backend.

#### Exemplo de requisição via cURL por token:
```sh
curl -X POST "https://fcm.googleapis.com/fcm/send" \
     -H "Authorization: Bearer SEU_ACCESS_TOKEN" \
     -H "Content-Type: application/json" \
     -d '{
           "token": "TOKEN_DO_DISPOSITIVO",
           "notification": {
             "title": "Título da Notificação",
             "body": "Conteúdo da mensagem"
             "image": "URL da imagem"
           }
         }'
```
#### Exemplo de requisição via cURL por tópico:
```sh
curl -X POST "https://fcm.googleapis.com/fcm/send" \
     -H "Authorization: Bearer SEU_ACCESS_TOKEN" \
     -H "Content-Type: application/json" \
     -d '{
           "topic": "NOME_DO_TOPICO",
           "notification": {
             "title": "Título da Notificação",
             "body": "Conteúdo da mensagem"
             "image": "URL da imagem"
           }
         }'
```

## Estrutura do Projeto

```
/firebase-push-notification-web
├── src/
│   ├── components/
│   ├── firebase/
│   │   ├── firebaseConfig.js  # Configuração do Firebase
│   ├── App.js                 # Componente principal
├── public/
├── .env                       # Configurações do Firebase (não deve ser commitado)
├── Dockerfile                 # Configuração para Docker
├── package.json               # Dependências do projeto
├── README.md                  # Documentação
```

## Licença

Este projeto é de código aberto e está sob a licença MIT.

---

🔥 **Desenvolvido com React e Firebase** 🚀

