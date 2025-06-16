
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Digitaliza tus Ventas, ¡Hoy mismo!" subheadline="Para dueños de pequeños negocios, entregamos tu web de ventas en menos de 24 horas con soporte continuo." cta1="Empieza Ahora" />
<How step1Title="Comparte tu Negocio" step1Desc="Nos cuentas sobre tu negocio y tus necesidades." step2Title="Creamos tu Web" step2Desc="Tendrás una web de ventas en menos de 24 horas." step3Title="Ventas Digitales" step3Desc="Vende en línea sin complicaciones, nosotros damos soporte 24/7." />
<Aboutus headline="WebGo: Digitalizando Negocios Locales" subheadline="Impulsamos tus ventas online, liberándote de la gestión web. Experiencia, rapidez y eficiencia nos distinguen." beneficiotitulo1="Aumento de Ventas" beneficio1="Maximizamos tus ingresos, llevando tus productos online." beneficiotitulo2="Gestión Integral" beneficio2="Nos ocupamos de todo, ahorra tiempo y esfuerzo." />
<Services heading="Digitaliza tus ventas, maximiza tus beneficios" description="Con WebGo, transformamos tus recomendaciones en ventas online. Sin complicaciones, sin pérdida de tiempo." services={[{"name":"Creación de sitio web","icon":"globe","description":"Diseñamos tu web de ventas en menos de 24 horas."},{"name":"Soporte 24/7","icon":"headset","description":"Siempre a tu disposición para cualquier consulta."},{"name":"Optimización SEO","icon":"search","description":"Mejoramos tu visibilidad online con SEO."},{"name":"Gestión de sitio web","icon":"cog","description":"Administramos tu web para que tú no tengas que hacerlo."},{"name":"Conversión de recomendaciones en ventas","icon":"dollar-sign","description":"Transformamos tus recomendaciones en ventas digitales."},{"name":"Formación Digital","icon":"chalkboard-teacher","description":"Te capacitamos para manejar tus ventas online."}]} />
<BeforeAndAfter subheadline="Visualiza la excelencia de nuestro trabajo y productos únicos" />
<Faq faqs={[{"pregunta":"¿Cómo puedo digitalizar mi negocio con los servicios de WebGo?","respuesta":"WebGo ofrece soluciones personalizadas para digitalizar tu negocio. Ofrecemos el servicio 'adad' que es perfectamente asequible y ayuda a llevar tu negocio al mundo digital. Todo lo que necesitas es contactarnos y nos encargaremos del resto."},{"pregunta":"¿Cuánto cuesta el servicio de digitalización de venta que ofrece WebGo?","respuesta":"Nuestro servicio 'adad' tiene un precio de 1234. Este es un precio competitivo en el mercado para un servicio que transformará tu negocio y aumentará tus ventas online."},{"pregunta":"¿Cómo puede WebGo ayudarme si no sé cómo generar ventas online?","respuesta":"Entendemos que generar ventas online puede ser un desafío. Por eso, nuestro equipo de expertos te guiará en cada paso del proceso. Nuestro servicio 'adad' se encarga de todo el proceso de digitalización y te permite centrarte en lo que haces mejor: dirigir tu negocio."},{"pregunta":"Estoy muy ocupado dirigiendo mi negocio. ¿Tendré que gestionar el sitio web por mi cuenta?","respuesta":"En WebGo, comprendemos que tu tiempo es valioso. Con nuestro servicio 'asdasda', nos encargamos de la gestión del sitio web para que puedas concentrarte en dirigir tu negocio. Nuestro equipo de expertos se encargará de todo, desde la configuración hasta el mantenimiento del sitio web."},{"pregunta":"¿Qué beneficios tendré al digitalizar mi negocio con WebGo?","respuesta":"Digitalizar tu negocio con WebGo te permitirá llegar a un público más amplio y aumentar tus ventas. No sólo te ayudamos a crear un sitio web, sino que también te enseñamos cómo usarlo para generar más ventas. Con nuestro servicio 'adad', podrás transformar tu negocio y obtener un retorno de la inversión significativo."}]} />
<BookAppointment 
                      heading="Transforma Tu Negocio Hoy" 
                      description="Paso a la era digital con WebGo. Aumenta tus ventas online sin preocuparte por el tiempo y el cómo. ¡Nosotros lo hacemos por ti!"
                      formPostUrl="https://webgo-generator.vercel.app//api/sendForm"
                      siteOwnerId="x42WVrMYQdZ7GKiFHrAtuG8kkb72"
                    />
<Footer />
    </main>
  );
}
