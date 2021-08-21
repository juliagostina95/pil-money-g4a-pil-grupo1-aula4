using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PilMoney.Models
{
    public class GestorUsuarios
    {
        string StrConn = ConfigurationManager.ConnectionStrings["PilMoneyEntities"].ToString();

        public string obtenerUsuario(string email)
        {
        
            using (SqlConnection conn = new SqlConnection(StrConn)){
                conn.Open();

                SqlCommand comm = new SqlCommand("obtenerUsuario", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                
                comm.Parameters.Add(new SqlConnection("@email", email));

                SqlDataReader dr = comm.ExecuteReader();
                if (dr.Read()){
                   string nombre_completo = dr.GetString(4).Trim();

                   return nombreCompleto;
                }

                else{
                    return "DefaultUser";
                }

               
            }
          
        }
    }
}