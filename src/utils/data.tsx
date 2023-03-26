export function getCurrentDate() {
  const data = new Date();
  const diasDaSemana = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ];
  const diaAtual = diasDaSemana[data.getDay()];
  const Mes = (data.getMonth() + 1).toString().padStart(2, '0');
  const Dia = data.getDate().toString().padStart(2, '0');
  const DiaMes = `${Dia}/${Mes}`;
  const hora = data.getHours();
  const Minutos = data.getMinutes();
  const horaMinutos = `${hora}:${Minutos}`;
  return {
    diaAtual,
    diaMes: DiaMes,
    horaMinutos,
  };
}
