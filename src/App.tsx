/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Brain, Globe, MessageSquare, MonitorPlay } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const portfolioLinks = [
    { title: "Ejemplo 1", url: "https://rzebqv211t.space.minimax.io/" },
    { title: "Ejemplo 2", url: "https://codepen.io/Miguelangel-Tisera-the-flexboxer/full/VYvJwpp" },
    { title: "Ejemplo 3", url: "https://uj7qh2py44.space.minimax.io/" },
    { title: "Ejemplo 4", url: "https://codepen.io/Miguelangel-Tisera-the-flexboxer/full/raxpNyE" },
    { title: "Ejemplo 5", url: "https://examenpersonajesrealizacionaudiovisul.netlify.app/" },
    { title: "Ejemplo 6", url: "https://codepen.io/Miguelangel-Tisera-the-flexboxer/full/PwZPKMj" },
    { title: "Ejemplo 7", url: "https://codepen.io/Miguelangel-Tisera-the-flexboxer/full/Qwyjzvv" },
    { title: "Ejemplo 8", url: "https://codepen.io/Miguelangel-Tisera-the-flexboxer/full/NPxGarz" },
  ];

  return (
    <div className="min-h-screen bg-blue-50 text-blue-950 font-sans">
      <header className="sticky top-0 z-50 bg-blue-900 text-white border-b-4 border-yellow-400">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <h1 className="text-2xl font-bold tracking-tight">Método TISERA</h1>
          <div className="text-sm font-medium text-blue-200 flex flex-col md:flex-row gap-4 items-center">
            <span>Profesor Miguelangel TISERA</span>
            <a href="mailto:miguelangeltisera@gmail.com" className="underline">miguelangeltisera@gmail.com</a>
            <a href="tel:04169110641" className="underline">0416-9110641</a>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <section id="hero" className="mb-20 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-blue-900">
            De la Pantalla al Cerebro: Ciberpedagogía Audiovisual
          </motion.h1>
          <p className="text-xl text-blue-800 mb-10 max-w-2xl mx-auto">
            La convergencia de la Realización Audiovisual, la Cibernética y la Pedagogía para una enseñanza innovadora.
          </p>
          <a href="#portfolio" className="inline-block bg-red-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-red-700 shadow-lg transition-transform hover:scale-105">
            Explorar el Método TISERA
          </a>
        </section>

        <section id="about" className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center text-blue-900">La Metodología Académica</h2>
          <p className="text-lg text-blue-800 mb-12 max-w-3xl mx-auto text-center">
            Basado en los Nueve Eventos de Instrucción de Robert Gagné y la Taxonomía de Bloom para diseñar objetivos de aprendizaje efectivos.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Brain, title: "Sistemas de Aprendizaje Adaptativo", desc: "Plataformas web que responden dinámicamente al ritmo de trabajo del estudiante." },
              { icon: Globe, title: "El Aula Global", desc: "Entornos de producción grupal utilizando herramientas web y gestión centralizada." },
              { icon: MonitorPlay, title: "Simulaciones Inmersivas", desc: "Ejercicios interactivos que aplican conceptos de realización audiovisual en entornos prácticos." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border-t-4 border-yellow-400 shadow-md">
                <item.icon className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-blue-900">{item.title}</h3>
                <p className="text-blue-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="matrix" className="mb-20 bg-white p-10 rounded-2xl shadow-lg border-l-8 border-red-600">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Matriz de Implementación Ciberpedagógica</h2>
          <p className="text-lg text-blue-800 mb-8">
            Esta matriz orienta a los educadores en la integración de tecnología, desde niveles de complejidad baja hasta entornos de alta inmersión.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="p-4 rounded-tl-lg">Nivel</th>
                  <th className="p-4">Descripción</th>
                  <th className="p-4 rounded-tr-lg">Ejemplos</th>
                </tr>
              </thead>
              <tbody className="text-blue-900">
                <tr className="border-b border-blue-100 bg-blue-50">
                  <td className="p-4 font-bold text-red-600">Bajo</td>
                  <td className="p-4">Tecnología de apoyo directo y consumo.</td>
                  <td className="p-4">Videos explicativos, foros de discusión, blogs.</td>
                </tr>
                <tr className="border-b border-blue-100 bg-white">
                  <td className="p-4 font-bold text-yellow-600">Medio</td>
                  <td className="p-4">Integración interactiva y colaborativa.</td>
                  <td className="p-4">Narrativas no lineales, simuladores sencillos.</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="p-4 font-bold text-blue-900">Alto</td>
                  <td className="p-4">Transformación total en entornos inmersivos.</td>
                  <td className="p-4">Entornos interactivos de simulación, IA aplicada.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="portfolio" className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center text-blue-900">El Método TISERA en Acción</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioLinks.map((link, i) => (
              <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-xl border border-blue-200 shadow hover:border-red-400 hover:shadow-lg transition text-center flex flex-col justify-between">
                <div className="mb-4">
                  <MonitorPlay className="w-10 h-10 mx-auto text-yellow-500" />
                </div>
                <h3 className="font-bold text-blue-900">{link.title}</h3>
              </a>
            ))}
          </div>
        </section>

      </main>

      <footer className="border-t border-blue-200 mt-20 py-8 text-center text-blue-800">
        <p>&copy; {new Date().getFullYear()} Profesor Miguelangel TISERA. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

