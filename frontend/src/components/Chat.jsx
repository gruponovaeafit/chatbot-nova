import logoPacho from "../assets/pacho.svg";
import userIcon from "../assets/user.svg";
import "../css/Chat.css"

export default function Chat() {
  return (
    <>
      <div
        className="card-body"
      >
        <div className="d-flex flex-column">
          <div className="d-flex align-items-start justify-content-end mb-2">
            <div
              className="text-white p-2 me-2 chat-container-user"
            >
              ¡Hola, NovaBot!
            </div>
            <img
              src={userIcon}
              className="rounded-circle icon-user"
            />
          </div>
          <div className="d-flex align-items-end mb-2">
            <img
              src={logoPacho}
              className="rounded-circle icon-bot me-2"
            />
            <div
              className="text-dark p-2 chat-container-bot"
            >
              Hola, ¿En qué puedo ayudarte?
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <form>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Escribe un mensaje"
            />
            <button className="btn" type="submit">
              <i class="fa-regular fa-paper-plane send-btn"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
