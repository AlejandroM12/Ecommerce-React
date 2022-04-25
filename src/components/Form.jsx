import FinishBuying from './FinishBuying';
import '../styles/Form.scss'

const Form = () => {
    return (
    <section id="contact" className="contact">
      <div className="section-title">
          <h2>Información del comprador</h2>
        </div>
      <div className="container" >
        <div className="row"  >
            <form action="" method="post" className="contactForm">
                <div className="form-container">
                  <input type="text" name="name" className="form-input" id="name" placeholder="Nombre(s) *" required />
                </div>
                <div className="form-container">
                  <input type="text" name="name" className="form-input" id="name" placeholder="Apellido(s) *" required />
                </div>
                <div className="form-container">
                <input type="phone" className="form-input" name="phone" id="subject" placeholder="Celular *" required />
                </div>
                <div className="form-container">
                  <input type="email" className="form-input" name="email" id="email" placeholder="Email *" required />
                </div>
                <span className='spanForm'>Usaremos tus datos para informarte sobre la entrega.</span>
              <FinishBuying />
            </form>
          </div>
          </div>
    </section>
    )
}
export default Form;