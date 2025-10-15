export type Character = {
  _id?: string; // fornecido pela API no Mongo (se houver) ou 'id' dependendo do modelo
  id?: string;  // id de rota (string/number) usado em /character/:id
  name: string;
  epithet?: string;
  age?: number;
  crew?: string;
  bounty?: number;
  devilFruit?: string;
  // outros campos conforme sua API
};

export type ApiError = { error: string };
