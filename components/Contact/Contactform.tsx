'use client'
export default function ContactForm() {
  async function handleSubmit(event: any) {
    event.preventDefault();
    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      subject:String(event.target.subject.value),
      message: String(event.target.message.value),
    }
    console.log(data);
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!res.ok) {
      throw new Error('Form submission failed')
    }


    // Logs the response data to the console
    console.log('Form submission response:', res.body)

  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4 md:w-1/2">
          <div className="mb-8">
            <label
              htmlFor="name"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Votre Nom
            </label>
            <input
              required
              id="name"
              type="text"
              name="name"
              placeholder="Entrer votre nom"
              className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
            />
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2">
          <div className="mb-8">
            <label
              htmlFor="email"

              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Votre Email
            </label>
            <input
              name="email"
             required
              id="email"
              placeholder="Enter votre email"
              className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
            />
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2">
          <div className="mb-8">
            <label
              htmlFor="subject"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Votre sujet
            </label>
            <input
              required
              name="subject"
              id="subject"
              placeholder="Enter votre sujet"
              className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
            />
          </div>
        </div>
        <div className="w-full px-4">
          <div className="mb-8">
            <label
              htmlFor="message"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Votre Message
            </label>
            <textarea
              required
              name="message"
              rows={5}
              id="message"
              placeholder="Enter your Message"
              className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
            ></textarea>
          </div>
        </div>
        <div className="w-full px-4">
          <button className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
            Valider
          </button>
        </div>
      </div>
    </form>
  );
}