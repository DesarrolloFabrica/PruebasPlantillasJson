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
  | "entityRelationship"  
  | "normalization" 
  | "sqlBasics"     
  | "databaseTypes" 
  | "transactions"
  | "roadmap"
  | "fundamentos"
  | "leyes"
  | "componentes"
  | "matematicas"
  | "metodos"
  | "teoremasTransitorios"
  | "conceptos"
  | "mapa"
  | "caso"
  | "laboratorio"
  | "resumen";

export interface LandingContentBlock {
  tipo: LandingContentBlockType;
  titulo: string;
  subtitulo?: string;
  texto?: string;

  tipoFigma?: "introduction" | "entityRelationship" | "sqlBasics" | "normalization" | "databaseTypes"| "transactions";

  /**
   * Bullets generales (por ejemplo, listas de ideas clave).
   */
  bullets?: string[];

  /**
   * Columnas / cards reutilizables.
   * Se usan para:
   * - "roadmap": bloques grandes del curso (fundamentos, leyes, componentes, etc.)
   * - "fundamentos": Corriente / Voltaje / Resistencia
   * - "leyes": Ohm / KCL / KVL / Conservación
   * - "matematicas": 4 bloques matemáticos
   * - "metodos": Nodos / Mallas / Superposición
   * - tipos legacy como "mapa"
   */
  columnas?: {
    titulo: string;
    texto: string;
    bullets?: string[];
  }[];

  /**
   * Pasos secuenciales (timeline, laboratorios, etc.).
   */
  pasos?: string[];

  /**
   * Ejemplo desarrollado (para "caso" o bloques similares).
   */
  ejemplo?: {
    titulo: string;
    enunciado: string;
    desarrollo: string;
  };

  /**
   * Items secundarios (por ejemplo RC, RL, RLC en "teoremasTransitorios").
   */
  itemsSecundarios?: {
    titulo: string;
    texto: string;
  }[];

  /**
   * Checklist específico del bloque (no confundir con learningOutcomes global).
   */
  checklist?: string[];



   // --------- CAMPOS ESPECÍFICOS PARA TRANSACTIONS / ACID ---------
  leccionNumero?: string;            // "7 de 10"
  descripcion?: string;              // texto grande bajo el título

  propiedades?: {
    letter: string;                  // "A", "C", "I", "D"
    name: string;                    // "Atomicidad"
    color: string;                   // "from-blue-500 to-cyan-500"
    icon?: "database" | "shield" | "lock" | "refresh"; // clave para mapear icono
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


