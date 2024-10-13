/**
 * IMPORTS
 */

import * as Progress from "@radix-ui/react-progress"; // Importando o Radix Loader
import "./spinner.css";

const Spinner = () => {
  return (
    <div className="spinner-container">
      <Progress.Root className="progress-bar" value={50}>
        <Progress.Indicator
          className="progress-indicator"
          style={{ width: "100%" }}
        />
      </Progress.Root>
      <p className="text-zinc-800">Carregando dados...</p>
    </div>
  );
};

/**
 * EXPORTS
 */
export { Spinner };
