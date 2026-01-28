import { Title } from "../components/title";
import Link from "next/link";

const contact: {
  method: string;
  link: string;
  label: string;
}[] = [
  {
    method: 'Email',
    link: 'mailto:rahulvardhan6300@gmail.com',
    label: 'rahulvardhan6300@gmail.com',
  },
  {
    method: 'Github',
    link: 'https://github.com/Rahul190901',
    label: 'git/Rahul190901',
  },
];

export default function Contact() {
  return (
    <main className="px-4">
      <h1 className="mx-auto text-left font-medium text-4xl mb-4 text-slate-950 md:w-1/2 lg:w-1/2 xl:w-2/5 2xl:w-1/4">
        Contact
        <div className="h-px bg-slate-300 my-6" />
        <span className="block text-slate-900 font-light text-xl">
          If you’d like to get in touch, you can reach me using the following methods. 
        </span>
      </h1>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto md:w-1/2 lg:w-1/2 xl:w-2/5 2xl:w-1/4 gap-4 md:gap-6">
          {contact.map((contactMethod) => {
            return (
              <div className="flex flex-col min-w-0" key={contactMethod.method}>
                <Title as="h2" variant="tertiary">
                  {contactMethod.method}
                </Title>
                <Link 
                  href={contactMethod.link} 
                  className="text-slate-700 font-light underline break-all sm:break-words overflow-wrap-anywhere"
                >
                  {contactMethod.label}
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  )
}