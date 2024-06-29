/// <reference types="vite/client" />
import type { ImportGlobFunction } from "vite/types/importGlob";

interface ImportMeta {
  glob: ImportGlobFunction;
}
