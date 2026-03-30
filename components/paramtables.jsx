// components/ParamTable.jsx
export const ParamTable = ({ title = "Parameters", params = [] }) => {
  if (!params.length) return null;

  return (
    <div className="ParamTable">
      <h3>{title}</h3>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Required</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {params.map((param, index) => (
            <tr key={index}>
              <td><code>{param.name}</code></td>
              <td>{param.type}</td>
              <td>{param.required ? "Yes" : "No"}</td>
              <td>{param.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
