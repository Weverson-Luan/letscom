/**
 * IMPORTS
 */
type IDefaultProps = {
  id?: number;
};

type ITesteProps = {
  id: string;
  numero_remessa: string;
  name: string;
  situacao: string;
  solicitante: string;
  tecnologia: string;
  availableAt: Date;
};

/**
 * EXPORTS
 */
export { IDefaultProps, ITesteProps };
