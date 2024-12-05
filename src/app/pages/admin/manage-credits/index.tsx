/**
 * IMPORTS
 */
import { useCallback, useRef } from "react";
import { File } from "lucide-react";
import { Button } from "../../../../presentation/components/button/button";
import { SelectPagination } from "../../../../presentation/components/select-pagination/select-pagination";
import { Spinner } from "../../../../presentation/components/spinner/spinner";
import { ManagerCreditsTable } from "./components/manager-credits-table/manager-credits-table";
import { Tabs } from "../../../../presentation/components/tabs";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useManagerCredits } from "../../../../hooks/credits/use-credits";
import { useStoreZustandManagerCredits } from "../../../../store-zustand/credits/credits";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ManageCredits = () => {
  const {
    currentPage,
    setCurrentPage,
    totalItemsPage,
    isLoading,
    itemsPerPage,
    isLoadingPage,
    setItemsPerPage,
  } = useStoreZustandManagerCredits();
  const { credits } = useManagerCredits();

  const chartRef = useRef(null);

  const nextPaginate = useCallback(() => {
    setCurrentPage(currentPage + 1);
  }, [currentPage]);

  // Função para lidar com a alteração do seletor de itens por página
  const handleItemsPerPageChange = useCallback(
    async (event: React.ChangeEvent<HTMLSelectElement>) => {
      setItemsPerPage(Number(event.target.value));
    },
    [itemsPerPage]
  );

  // Dados do gráfico com horários e valores de exemplo
  const chartData = {
    labels: ["00", "04", "08", "12", "14", "16", "18"], // Horários como rótulos do eixo X
    datasets: [
      {
        label: "Movimentação de Créditos",
        data: [5, 10, 6, 12, 8, 15, 4], // Exemplo de dados para cada horário
        backgroundColor: (context: any) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return null;
          }
          const gradient = ctx.createLinearGradient(
            0,
            chartArea.bottom,
            0,
            chartArea.top
          );
          gradient.addColorStop(0, "rgba(255, 205, 86, 0.5)"); // Amarelo claro na base
          gradient.addColorStop(1, "rgba(255, 159, 64, 1)"); // Amarelo mais escuro no topo
          return gradient;
        },
        borderRadius: 5, // Borda arredondada para um visual suave
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Oculta a legenda para seguir o estilo da imagem
      },
      tooltip: {
        enabled: true, // Exibe tooltip ao passar o mouse
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Remove linhas de grade no eixo X
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.1)", // Linhas de grade leves no eixo Y
        },
      },
    },
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Tabs defaultValue="credits" className="container mx-auto min-h-screen">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Seção Gerenciar Produto */}
            <div className="flex-1 bg-neutral-custom500 rounded h-full">
              <div className="flex items-center">
                <div className="ml-auto flex items-center gap-2 mb-2">
                  <div className="hidden md:block">
                    {/* Adicionando o seletor de itens por página */}
                    <SelectPagination
                      itemsPerPage={itemsPerPage}
                      handleItemsPerPageChange={handleItemsPerPageChange}
                    />
                  </div>
                  {/* Adicionando o botão de exportar */}
                  <Button
                    size="sm"
                    variant="default"
                    className="h-8 gap-1 text-neutral-50"
                  >
                    <File className="h-3.5 w-3.5 " />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap text-neutral-50">
                      Exportar
                    </span>
                  </Button>
                </div>
              </div>
              <ManagerCreditsTable
                isLoadingPage={isLoadingPage}
                credits={credits ?? []}
                offset={itemsPerPage}
                totalCredits={totalItemsPage}
                nextPaginate={nextPaginate}
              />
            </div>

            <div className="flex flex-col gap-4 w-full lg:w-1/3">
              {/* Seção Resumo Diário */}
              <div className="bg-card p-4 rounded">
                <h2 className="text-lg font-semibold text-zinc-900">
                  Resumo Diário
                </h2>

                <p className="text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur porro et reiciendis. Nemo commodi at ex,
                  praesentium quidem laborum quod officiis sequi explicabo
                  suscipit iste numquam quibusdam nulla a perferendis!
                </p>
                <Bar
                  ref={chartRef}
                  data={chartData}
                  options={chartOptions}
                  className="cursor-pointer"
                />
              </div>

              {/* Seção Tutorial em Vídeo */}
              <div className="bg-card p-4 rounded h-[280px]">
                <h2 className="text-lg font-semibold text-zinc-900 mb-2">
                  Tutorial em Vídeo
                </h2>
                <iframe
                  width="100%"
                  height="90%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded"
                ></iframe>
              </div>
            </div>
          </div>
        </Tabs>
      )}
    </>
  );
};

/**
 * EXPORTS
 */
export { ManageCredits };
