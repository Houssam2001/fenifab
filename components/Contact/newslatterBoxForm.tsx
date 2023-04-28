'use client'
export default function NewsLatterBoxForm(){
    async function handleSubmit(event: any) {
        event.preventDefault();
        const data = {
          name: String(event.target.name.value),
          email: String(event.target.email.value),
        }
        console.log(data);
        const res = await fetch(`/api/news`, {
          method: `POST`,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
    
        if (!res.ok) {
          throw new Error(`Form submission failed`)
        }
    
    
        // Logs the response data to the console
        console.log(`Form submission response:`, res.body)
    
      }
    return(
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter votre nom"
          className="mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter votre e-mail"
          className="mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
        />
        <input
          type="submit"
          value="abonner"
          className="duration-80 mb-4 w-full cursor-pointer rounded-md border border-transparent bg-primary py-3 px-6 text-center text-base font-medium text-white outline-none transition ease-in-out hover:bg-opacity-80 hover:shadow-signUp focus-visible:shadow-none"
        />
        <p className="text-center text-base font-medium leading-relaxed text-body-color">
        Pas de spam garanti, alors s`il vous plaît n'envoyez pas de spam.
        </p>
      </form>
    );
}