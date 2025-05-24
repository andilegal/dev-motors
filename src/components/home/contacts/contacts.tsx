import { HomeMetadata } from '@/types';
import { Mail, Phone, Clock } from 'lucide-react';

type ContactsProps = {
  data: HomeMetadata;
};

export function Contacts({ data }: ContactsProps) {
  return (
    <section
      className="py-16 px-6 md:px-12 bg-gradient-to-br from-sky-50 to-white"
      id="contacts"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-extrabold text-sky-800 mb-10">
          Fale Conosco
          <span className="block h-1 w-24 bg-yellow-300 mt-2 mx-auto rounded-full" />
        </h3>

        {/* Card container */}
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col sm:flex-row sm:justify-center sm:gap-12 gap-8 text-sky-800">
          {/* Email */}
          <div className="flex flex-col items-center gap-2 sm:border-r sm:border-gray-200 sm:pr-12">
            <Mail className="w-6 h-6 text-yellow-400" />
            <p className="text-lg font-semibold">{data.contact.email}</p>
          </div>

          {/* Telefone */}
          <div className="flex flex-col items-center gap-2 sm:border-r sm:border-gray-200 sm:pr-12 sm:pl-12">
            <Phone className="w-6 h-6 text-yellow-400" />
            <p className="text-lg font-semibold">{data.contact.phone}</p>
          </div>

          {/* Horário de funcionamento */}
          <div className="flex flex-col items-center gap-1 sm:pl-12">
            <Clock className="w-6 h-6 text-yellow-400" />
            <span className="text-sm text-gray-500 uppercase tracking-wide">
              Horário de funcionamento
            </span>
            <p className="text-lg font-semibold">{data.contact.time}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
