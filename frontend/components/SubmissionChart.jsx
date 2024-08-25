import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend} from 'recharts'
function SubmissionChart({data}) {
   
    return (
      <ResponsiveContainer width="95%" height={480}>
        <BarChart data={data}>
            <XAxis dataKey="name"/>
            <YAxis />
            <Tooltip/>
            <Bar dataKey="submissoes_por_dia" fill="#8884d8" name="Submissões do dia"/>
        </BarChart>
      </ResponsiveContainer>
    )
}
  
  export default SubmissionChart