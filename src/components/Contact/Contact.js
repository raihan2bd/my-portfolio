import SocialKit from '../SocialKit';
import ContactForm from './ContactForm'

const Contact = () => {
  const formId = process.env.FORM_ID;
  return (
    <section id="contact" className="flex flex-col justify-center items-center p-4 m-4 md:m-6 rounded-lg border border-sky-950 bg-black/50">
      <h2 className="text-center text-sky-400 p-3 w-fit border-b-2 border-orange-500 text-2xl font-bold mx-auto my-6">
        Contact
      </h2>
      <div className="bg-white/5 p-4 rounded-lg max-w-[767px] w-full mb-6">
        <SocialKit />
        <ContactForm formId={formId} />
      </div>
    </section>
  )
}

export default Contact