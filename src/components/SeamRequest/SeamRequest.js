import React from "react";
import { Grid, TextField, Paper } from "@material-ui/core";
import MaterialTable from "material-table";

const seamRequest = props => {
  const columns = [
    { title: "Detalle", field: "seamDetail" },
    { title: "Fecha de entrega", field: "deliverDate", type: "date" },
    {
      title: "Prioridad",
      field: "priority",
      lookup: { 1: "Baja", 2: "Media", 3: "Alta" }
    },
    {
      title: "Estado",
      field: "status",
      lookup: {
        1: "Nuevo",
        2: "En proceso",
        3: "Completado",
        4: "Anulado",
        5: "En espera",
        6: "Entregado"
      }
    }
  ];

  return (
    <div>
      <Grid container justify="center" spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper style={{ padding: 10 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="Nombre del cliente"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth id="standard-basic" label="Telefono" />
              </Grid>
            </Grid>
            <MaterialTable
              title="Solicitud de costuras"
              columns={columns}
              data={props.seams}
                editable={{
                  onRowAdd: newData =>
                    new Promise(resolve => {
                      setTimeout(() => {
                        resolve();
                        setState(prevState => {
                          const data = [...prevState.data];
                          data.push(newData);
                          return { ...prevState, data };
                        });
                      }, 600);
                    }),
              //     onRowUpdate: (newData, oldData) =>
              //       new Promise(resolve => {
              //         setTimeout(() => {
              //           resolve();
              //           if (oldData) {
              //             setState(prevState => {
              //               const data = [...prevState.data];
              //               data[data.indexOf(oldData)] = newData;
              //               return { ...prevState, data };
              //             });
              //           }
              //         }, 600);
              //       }),
              //     onRowDelete: oldData =>
              //       new Promise(resolve => {
              //         setTimeout(() => {
              //           resolve();
              //           setState(prevState => {
              //             const data = [...prevState.data];
              //             data.splice(data.indexOf(oldData), 1);
              //             return { ...prevState, data };
              //           });
              //         }, 600);
              //       })
              //   }}
            ></MaterialTable>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default seamRequest;
