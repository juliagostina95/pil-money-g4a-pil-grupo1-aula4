using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;

namespace PilMoney.Models
{
    public class GestorLogin
    {
        public bool ValidarLogin(LoginRequest ploginRequest)
        {

            string encriptedPassword = GetSha256(ploginRequest.Contraseña);
            string strConn = ConfigurationManager.ConnectionStrings["PilMoneyEntities"].ToString();
            bool result = false;

            using (SqlConnection conn = new SqlConnection(strConn))
            {
                conn.Open();

                SqlCommand comm = new SqlCommand("obtenerLogin", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@Email", ploginRequest.Email));
                comm.Parameters.Add(new SqlParameter("@Contraseña", encriptedPassword));

                SqlDataReader reader = comm.ExecuteReader();

                if (reader.HasRows)
                {
                    result = true;
                }
                else
                {
                    result = false;
                }

            }
            return result;

        }
        public string GetSha256(string str)
        {
            SHA256 sha256 = SHA256Managed.Create();
            ASCIIEncoding encoding = new ASCIIEncoding();
            byte[] stream = null;
            StringBuilder sb = new StringBuilder();
            stream = sha256.ComputeHash(encoding.GetBytes(str));
            for (int i = 0; i < stream.Length; i++) sb.AppendFormat("{0:x2}", stream[i]);
            return sb.ToString();

        }
    }
}