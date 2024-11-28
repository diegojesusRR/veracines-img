import {Button, Checkbox, Divider, TextField,} from "@mui/material";
import {IProyeccionesPeliculaDia} from "@/interfaces/formularios";
import {useEffect, useState} from "react";
import DatePicker from "react-datepicker";
import {format} from "date-fns";
import {es} from "date-fns/locale";

export const FormularioProyeccionDia = ({
                                            config,
                                            index,
                                            onChange,
                                        }: {
    config: IProyeccionesPeliculaDia,
    index: number,
    onChange: (dia: IProyeccionesPeliculaDia, index: number) => void,
}) => {

    const canAddHorario = () => {
        const ultimaHora = config.horarios[config.horarios.length - 1].hora;
        const hora = parseInt(ultimaHora.split(":")[0]);
        return hora <= 21;
    }

    const [isNuevoHorarioDisponible, setIsNuevoHorarioDisponible] = useState(canAddHorario());

    useEffect(() => {
        setIsNuevoHorarioDisponible(canAddHorario());
    }, [config.horarios]);

    const addNuevoHorario = () => {
        const hora = getSiguienteHora();
        onChange({dia: config.dia, horarios: [...config.horarios, {hora, vose: false}],}, index);
    }


    const getSiguienteHora = () => {
        const ultimaHora = config.horarios[config.horarios.length - 1].hora;
        let hora = parseInt(ultimaHora.split(":")[0]);
        const minutos = ultimaHora.split(":")[1];

        // Rellenar con ceros a la izquierda
        if (hora < 8) {
            return `0${hora + 2}:${minutos}`;
        }

        return `${hora + 2}:${minutos}`;
    }

    const changeVoseStatus = (indexProyeccion: number, indexHorario: number) => {
        const horariosNuevos = config.horarios;
        horariosNuevos[indexHorario].vose = !horariosNuevos[indexHorario].vose;

        onChange({dia: config.dia, horarios: horariosNuevos}, indexProyeccion);
    }


    return (
        <div className="flex flex-col space-y-4 mt-4 border-b-2 pb-2">
            {/* Selector de fecha */}
            <DatePicker
                id="dia-input"
                value={format(config.dia, "EEE, d MMM", { locale: es })}
                onChange={(date: Date) => onChange({ dia: date, horarios: config.horarios }, index)}
                locale={es}
                dateFormat="EEE, d MMM"
                className="w-full text-center border-2 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Horarios */}
            <div className="flex flex-col space-y-3 bg-gray-100 rounded-lg p-4">
                {config.horarios.map((x, index2) => (
                    <div
                        key={`horario-${config.dia.getDate()}-${index2}`}
                        className="flex items-center space-x-4 px-3 py-1"
                    >
                        {/* Input de hora */}
                        <TextField
                            id={`hora-input-${index2}`}
                            label="Hora"
                            value={x.hora}
                            onChange={(e) => {
                                const horariosNuevos = [...config.horarios];
                                const nuevaHora = e.target.value;

                                // Validar que la nueva hora sea posterior a la hora anterior
                                if (
                                    (index2 > 0 && nuevaHora <= config.horarios[index2 - 1].hora) ||
                                    (config.horarios[index2+1] && nuevaHora >= config.horarios[index2 + 1].hora)
                                ) {
                                    alert("Los horarios deben estar ordenados");
                                    return;
                                }

                                horariosNuevos[index2].hora = nuevaHora;
                                onChange({dia: config.dia, horarios: horariosNuevos}, index);
                            }}
                            type="time"
                            className="flex-grow border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {/* Checkbox VOSE */}
                        <label className="flex items-center space-x-2 text-gray-700">
                            <Checkbox
                                onChange={() => changeVoseStatus(index, index2)}
                                checked={x.vose}
                                className="form-checkbox h-5 w-5 text-blue-600"
                            />
                            <span>VOSE</span>
                        </label>
                    </div>
                ))}

                {/* Botón para agregar horario */}
                {isNuevoHorarioDisponible && (
                    <Button
                        onClick={addNuevoHorario}
                        className="self-center w-full border-2 bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                    >
                        + Hora
                    </Button>
                )}
            </div>
        </div>


    )
}