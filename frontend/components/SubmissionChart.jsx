import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend} from 'recharts'
  
function SubmissionChart({ data}) {
   
    return (
        <BarChart width={1230} height={500} data={data}>
            <XAxis dataKey="name"/>
            <YAxis />
            <Tooltip/>
            <Bar dataKey="submissoes_por_dia" fill="#8884d8" name="Submissões do dia"/>
      </BarChart>
    )
}
  
  export default SubmissionChart