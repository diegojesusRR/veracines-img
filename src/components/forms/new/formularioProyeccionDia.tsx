import {Button, Card, Checkbox, Divider, TextField,} from "@mui/material";
import {IProyeccionesPeliculaDia} from "@/interfaces/formularios";
import {useEffect, useState} from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import { es } from "date-fns/locale";

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
        <Card className={'mt-4'}>
            <div className={"flex flex-col"}>
                    <DatePicker
                        id="dia-input"
                        value={format(config.dia, "EEE, d MMM", {locale: es})}
                        onChange={(date: Date) => onChange({dia:date, horarios: config.horarios}, index)}
                        locale={es}
                        dateFormat="EEE, d MMM"
                    />
                <Divider sx={{my: 1}}></Divider>
                <div className={"flex flex-col"}>
                    {
                        config.horarios.map((x, index2) => (
                                <div key={`horario-${config.dia.getDate()}-${index2}`} style={{marginTop: 3, marginBottom: 3}}>
                                    <TextField
                                        id="hora-input"
                                        label="Hora"
                                        value={x.hora}
                                        onChange={(e) => {
                                            const horariosNuevos = config.horarios;
                                            horariosNuevos[index2].hora = e.target.value;
                                            onChange({dia: config.dia, horarios: horariosNuevos}, index)
                                        }}
                                        type="time"
                                    />
                                    <label>
                                        <Checkbox onChange={() => changeVoseStatus(index, index2)} checked={x.vose}
                                                  value={x.vose}/>
                                        VOSE
                                    </label>
                                </div>
                            )
                        )
                    }
                    {isNuevoHorarioDisponible ? <Button onClick={addNuevoHorario}>+ Hora</Button> : <></>}
                </div>

            </div>
        </Card>
    )
}