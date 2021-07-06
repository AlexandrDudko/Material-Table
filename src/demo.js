import React from "react";
import MaterialTable from "material-table";
import Search from "./search.js";

export default function MaterialTableDemo() {
  const [searchString, setsearchString] = React.useState("");
  const handleSearchCallback = (searchStr) => {
    setsearchString(searchStr);
  };
  const [state, setState] = React.useState({
    columns: [
      {
        title: <Search parentCallback={handleSearchCallback} />,
        field: "name",
        sorting: false
      },
      { title: "Surname", field: "surname" },
      { title: "Birth Year", field: "birthYear", type: "numeric" },
      {
        title: "Birth Place",
        field: "birthCity",
        lookup: { 34: "Istanbul", 63: "Sanl?urfa" }
      }
    ],
    data: [
      { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
      {
        name: "Zerya Betul",
        surname: "Baran",
        birthYear: 2017,
        birthCity: 34
      }
    ]
  });

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={
        searchString !== ""
          ? state.data.filter(function (row) {
              return row.name.includes(searchString);
            })
          : state.data
      }
      options={{
        search: false
      }}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          })
      }}
    />
  );
}
