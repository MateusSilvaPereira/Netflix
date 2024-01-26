import './FormEmail.scss'
const FormEmail = () => {
    
    return(
        <form>
            <input type="email" placeholder="Email" className="input" />
            <button className="btn-start">Vamos lá {'>'} </button>
        </form>
    )
}

export default FormEmail;