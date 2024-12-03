function App() {
  let nom = "Mohamed";
  const age = 22;
  const matieres = ["BD", "Java", "FCC", "UML"];
  const pays = [
    { nom: "Tunisie", ville: "Sfax", photos: "i1.jpg" },
    { nom: "France", ville: "Marseille", photos: "i2.jpg" },
    { nom: "Allemagne", ville: "Bern", photos: "i3.jpg" },
    { nom: "Maroc", ville: "Aghadir", photos: "i4.jpg" },
  ];
  return (
    <div>
      <h1>Welcome</h1>
      <h3>Je m'appelle {nom} </h3>
      {/* ceci est un commentaire */}
      <h4> j'ai {age} ans </h4>
      <h3>Matières préférées</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Indice</th>
            <th>Nom</th>
          </tr>
        </thead>
        <tbody>
          {matieres.map((mat, ind) => {
            return (
              <tr key={ind}>
                <td>{ind + 1} </td>
                <td>{mat} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h3>Villes préférées</h3>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Ville</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {pays.map((value, ind) => {
            return (
              <tr key={ind}>
                <td>{value.nom}</td>
                <td>{value.ville}</td>
                <td>
                  <img src={value.photos} width="100" alt={value.ville} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
