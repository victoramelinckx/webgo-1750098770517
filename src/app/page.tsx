"use client";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Footer } from "@/components/Footer";
import { Proyectos } from "@/components/Proyectos";
import Pasos from "@/components/Pasos";
import VideosTestimonios from "@/components/VideosTestimonios";
import Precios from "@/components/Precios";

export default function Home() {
  const howData = {
    title: "Todo lo que necesitas para crecer",
    subtitle: "Beneficios de trabajar con WebGo.",
  };

  return (
    <main>

      <Hero headline="Impulsa tu negocio con páginas web que venden." subheadline="Diseño y desarrollo web.
E-commerce seguro y eficiente: vende 24/7 con confianza.
Software a medida: automatiza y crece tu empresa." cta1="Obten tu Sitio Web" />
      <How title={howData.title} subtitle={howData.subtitle} />
      <Proyectos />
      <Pasos />
      <Precios />
      <VideosTestimonios />
      <Footer />
    </main>
  );
}
