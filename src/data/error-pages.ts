export interface ErrorPageContent {
  code: "400" | "403" | "404" | "500" | "503";
  title: string;
  titleEs: string;
  body: string;
  bodyEs: string;
}

export const errorPages: Record<ErrorPageContent["code"], ErrorPageContent> = {
  "400": {
    code: "400",
    title: "That request took a wrong turn.",
    titleEs: "Esa solicitud tomó otro camino.",
    body: "Return to our tours and start again from a familiar trail.",
    bodyEs: "Vuelve a nuestros tours y comienza de nuevo desde un camino conocido.",
  },
  "403": {
    code: "403",
    title: "This trail is currently closed.",
    titleEs: "Este sendero no está disponible.",
    body: "The page cannot be opened from here, but the Pacific is still waiting.",
    bodyEs: "Esta página no puede abrirse desde aquí, pero el Pacífico sigue esperando.",
  },
  "404": {
    code: "404",
    title: "This adventure is off the map.",
    titleEs: "Esta aventura no aparece en el mapa.",
    body: "The page may have moved. Find your way back through our Costa Rica experiences.",
    bodyEs:
      "La página pudo cambiar de lugar. Regresa por medio de nuestras experiencias en Costa Rica.",
  },
  "500": {
    code: "500",
    title: "The trail needs a moment.",
    titleEs: "El camino necesita un momento.",
    body: "Something unexpected interrupted this route. Try again or plan with us directly.",
    bodyEs:
      "Algo inesperado interrumpió esta ruta. Intenta de nuevo o planea directamente con nosotros.",
  },
  "503": {
    code: "503",
    title: "We are preparing the next departure.",
    titleEs: "Estamos preparando la próxima salida.",
    body: "The site is taking a short pause. Our team is still available on WhatsApp.",
    bodyEs: "El sitio está tomando una pausa. Nuestro equipo sigue disponible por WhatsApp.",
  },
};
