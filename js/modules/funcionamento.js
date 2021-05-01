export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const isDiaAberto = diasSemana.indexOf(diaAgora) !== -1;
  const isHorarioAberto =
    horarioAgora > horarioSemana[0] && horarioAgora < horarioSemana[1];

  if (isDiaAberto && isHorarioAberto) {
      funcionamento.classList.add('aberto')
  }
}
