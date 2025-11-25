//src/types/course.ts
// ---------- Secciones clásicas ----------
export interface CourseSection {
  titulo: string;
  texto: string;
  bullets?: string[];
  ejemplo?: string;
  quizPregunta?: string;
  quizRespuesta?: string;
}

// ---------- LANDING AVANZADA ----------

// 1. Overview
export interface LandingOverview {
  titulo: string;
  texto: string;
}

// 2. Pilares (si en algún curso los quieres usar)
export interface LandingPillar {
  titulo: string;
  descripcion: string;
}

export interface LandingPillars {
  titulo: string;
  descripcion?: string;
  pilares: LandingPillar[];
}

// 3. Qué aprenderás
export interface LandingLearningOutcomes {
  titulo: string;
  bullets: string[];
}

// 4. Aplicaciones
export interface LandingApplication {
  campo: string;
  rol: string;
  descripcion: string;
}

export interface LandingApplications {
  titulo: string;
  descripcion?: string;
  items: LandingApplication[];
}

// 5. Temario / syllabus
export interface LandingModule {
  titulo: string;
  temas: string[];
}

export interface LandingSyllabus {
  titulo: string;
  descripcion?: string;
  unidades: LandingModule[];
}

// 6. Mini-quiz inicial
export interface LandingStarterQuiz {
  titulo: string;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
}

// 7. Bloques de contenido DIDÁCTICO (nuevo + legacy)
export type LandingContentBlockType =
  | "introduction"
  | "conceptos"
  | "producto"
  | "segmentacion";

export interface LandingContentBlock {
  tipo: LandingContentBlockType;
  titulo: string;
  subtitulo?: string;
  texto?: string;

  tipoFigma?: "introduction" | "entityRelationship" | "sqlBasics" | "normalization" | "databaseTypes" | "transactions";

  bullets?: string[];

  columnas?: {
    titulo: string;
    texto: string;
    bullets?: string[];
  }[];

  pasos?: string[];

  ejemplo?: {
    titulo: string;
    enunciado: string;
    desarrollo: string;
  };

  itemsSecundarios?: {
    titulo: string;
    texto: string;
  }[];

  checklist?: string[];

  leccionNumero?: string;
  descripcion?: string;

  propiedades?: {
    letter: string;
    name: string;
    color: string;
    icon?: "database" | "shield" | "lock" | "refresh";
    description: string;
    example: {
      scenario: string;
      steps: {
        action: string;
        status?: "success" | "warning" | "default";
      }[];
      result: string;
    };
  }[];

  snippetSQL?: string;

  commitInfo?: {
    title: string;
    description: string;
  };

  rollbackInfo?: {
    title: string;
    description: string;
  };

  marketingMix?: {
    titulo?: string;
    descripcion?: string;
    casos?: MarketingMixCase[];
  };

  /**
   * Niveles del producto (3 tarjetas clicables).
   */
  productLevels?: {
    level: string;
    icon: string;
    desc: string;
    color?: string;
    detail: string;
    example: string;
    keyPoint: string;
  }[];

  /**
   * Clasificación de productos (acordeón).
   */
  productCategories?: {
    id: string;
    title: string;
    desc: string;
    examples: string;
    strategy: string;
    icon: string;
  }[];

  /**
   * Ciclo de vida del producto.
   */
  lifeCycle?: {
    titulo?: string;
    descripcion?: string;
    phases: {
      stage: string;
      sales: string;
      profit: string;
      strategy: string;
      example: string;
      color: string;
      actions: string[];
    }[];
  };

  /**
   * Bloque final de estrategia de marca.
   */
  brandStrategy?: {
    titulo?: string;
    descripcion?: string;
    bullets: {
      label: string;
      desc: string;
    }[];
    caseStudy: {
      titulo: string;
      valorMarca: string;
      asociaciones: string;
      resultado: string;
    };
  };
    /**
   * Segmentación de mercados (Topic 2)
   * Permite sobreescribir los ejemplos, bases, estrategias y requisitos
   * desde el JSON. Si no vienen, se usan los defaults del componente.
   */
  segmentationExamples?: {
    toyota?: {
      company?: string;
      icon?: string;
      segments?: {
        name: string;
        product: string;
        benefit: string;
      }[];
    };
    nike?: {
      company?: string;
      icon?: string;
      segments?: {
        name: string;
        product: string;
        benefit: string;
      }[];
    };
    netflix?: {
      company?: string;
      icon?: string;
      segments?: {
        name: string;
        product: string;
        benefit: string;
      }[];
    };
  };

  segmentationBases?: {
    type?: string;
    variables?: string[];
    example?: string;
    whenToUse?: string;
  }[];

  targetingStrategies?: {
    indiferenciado?: {
      name?: string;
      desc?: string;
      pros?: string[];
      cons?: string[];
      example?: string;
      icon?: string;
    };
    diferenciado?: {
      name?: string;
      desc?: string;
      pros?: string[];
      cons?: string[];
      example?: string;
      icon?: string;
    };
    concentrado?: {
      name?: string;
      desc?: string;
      pros?: string[];
      cons?: string[];
      example?: string;
      icon?: string;
    };
  };

  segmentationRequirements?: {
    label?: string;
    desc?: string;
    icon?: string;
  }[];

}


// ---------- BLOQUE COMPLETO DE LANDING ----------
export interface CourseLanding {
  overview: LandingOverview;

  // Opcional, por si quieres usarla
  ideaCentral?: {
    concepto: string;
    fraseClave: string;
  };

  // Todo lo “viejo” lo dejamos opcional
  pillars?: LandingPillars;
  learningOutcomes?: LandingLearningOutcomes;
  applications?: LandingApplications;
  syllabus?: LandingSyllabus;
  starterQuiz?: LandingStarterQuiz;

  // NUEVO: flujo del micro-curso (las 7 secciones didácticas)
  contentBlocks?: LandingContentBlock[];

  cierre?: {
    mensaje: string;
    callToAction: string;
  };
}

// ---------- STRUCT PRINCIPAL DE CURSO ----------
export interface CourseData {
  id?: string;
  tituloCurso: string;
  intro: string;
  secciones: CourseSection[];
  resumen: string;
  landing?: CourseLanding;
}

// 👇 Caso de estudio de Marketing Mix que se usará en las 4Ps
export interface MarketingMixCase {
  id: string;          // "starbucks", "tesla", etc.
  name: string;        // Nombre visible
  logo: string;        // Emoji o caracter que usas de logo
  producto: string;
  precio: string;
  plaza: string;
  promocion: string;
}

