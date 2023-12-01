import companyItems from "../data/companies.json";

export const CompanyTable = () => {
	return /*html*/ `
<div class="componentTables -mt-6">

	<table class="tech-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Headquarters</th>
        <th>Founding Year</th>
        <th>Description</th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <td colspan="5">Tech Companies Data</td>
      </tr>
    </tfoot>
    <tbody>
		${companyItems.map(company => {
			return `
      <tr>
        <td>${company.id}</td>
        <td>${company.name}</td>
        <td>${company.headquarters}</td>
        <td>${company.foundingYear}</td>
        <td>${company.description}</td>
      </tr>
			
			`
		}).join('')}
    </tbody>
  </table>	

</div>
`
}