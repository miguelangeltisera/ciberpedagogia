/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Brain, Globe, MessageSquare, MonitorPlay, Video, Code, FileText, Layout, Layers, Film, Smartphone, Cpu, Eye } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const portfolioLinks = [
    { title: "Ejemplo 1", url: "https://rzebqv211t.space.minimax.io/", icon: Video },
    { title: "Ejemplo 2", url: "https://codepen.io/Miguelangel-Tisera-the-flexboxer/full/VYvJwpp", icon: Code },
    { title: "Ejemplo 3", url: "https://uj7qh2py44.space.minimax.io/", icon: Smartphone },
    { title: "Ejemplo 4", url: "https://codepen.io/Miguelangel-Tisera-the-flexboxer/full/raxpNyE", icon: Layout },
    { title: "Ejemplo 5", url: "https://examenpersonajesrealizacionaudiovisul.netlify.app/", icon: FileText },
    { title: "Ejemplo 6", url: "https://codepen.io/Miguelangel-Tisera-the-flexboxer/full/PwZPKMj", icon: Layers },
    { title: "Ejemplo 7", url: "https://codepen.io/Miguelangel-Tisera-the-flexboxer/full/Qwyjzvv", icon: Film },
    { title: "Ejemplo 8", url: "https://codepen.io/Miguelangel-Tisera-the-flexboxer/full/NPxGarz", icon: Cpu },
  ];

  return (
    <div className="min-h-screen bg-blue-50 text-blue-950 font-sans">
      <header className="sticky top-0 z-50 bg-blue-900 text-white border-b-4 border-yellow-400">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <h1 className="text-2xl font-bold tracking-tight">Metodología Tisera</h1>
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
          <a href="#vision" className="inline-block bg-red-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-red-700 shadow-lg transition-transform hover:scale-105">
            Explorar la Metodología
          </a>
        </section>

        <section id="vision" className="mb-20 bg-white p-10 rounded-3xl shadow-xl border-t-8 border-yellow-400">
          <div className="flex items-center gap-4 mb-8">
            <Eye className="w-12 h-12 text-blue-900" />
            <h2 className="text-4xl font-extrabold text-blue-900">Nuestra Visión</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-extrabold text-blue-900 leading-tight">Ciberpedagogía Audiovisual: Innovación en la Enseñanza</h3>
              <p className="text-xl text-blue-800 leading-relaxed font-medium">
                La Ciberpedagogía Audiovisual transforma la educación mediante la unión de tres ejes:
              </p>
            </div>
            <div className="space-y-6 bg-blue-50 p-8 rounded-2xl border-l-4 border-red-600 shadow-inner">
              <ul className="space-y-4">
                <li>
                  <strong className="text-blue-900">Narrativa Audiovisual:</strong>
                  <p className="text-blue-800">Contenidos inmersivos de alta calidad que capturan la atención.</p>
                </li>
                <li>
                  <strong className="text-blue-900">Sistemas Cibernéticos:</strong>
                  <p className="text-blue-800">Herramientas y algoritmos que ofrecen retroalimentación constante y personalizada.</p>
                </li>
                <li>
                  <strong className="text-blue-900">Metodología Activa:</strong>
                  <p className="text-blue-800">Un enfoque donde el estudiante aprende haciendo, ya sea mediante simulaciones virtuales o creación colaborativa.</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 p-6 bg-yellow-50 rounded-xl text-blue-900 italic text-center font-medium">
            "Este modelo permite pasar de la visualización pasiva a un ecosistema de aprendizaje adaptativo, donde los materiales didácticos responden y evolucionan según las necesidades de cada alumno."
          </div>
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
          <h2 className="text-3xl font-bold mb-10 text-center text-blue-900">La Metodología en Acción</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioLinks.map((link, i) => (
              <motion.a 
                key={i} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                whileHover={{ y: -8, scale: 1.05 }}
                className="bg-white p-8 rounded-2xl border border-blue-100 shadow-lg hover:border-red-500 hover:shadow-2xl transition-all text-center flex flex-col items-center justify-center gap-4 group"
              >
                <div className="p-4 bg-blue-50 rounded-full group-hover:bg-yellow-100 transition-colors">
                  <link.icon className="w-10 h-10 text-blue-900 group-hover:text-red-600 transition-colors" />
                </div>
                <h3 className="font-extrabold text-blue-900 text-lg">{link.title}</h3>
                <span className="text-xs font-bold text-red-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Ver Proyecto</span>
              </motion.a>
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

