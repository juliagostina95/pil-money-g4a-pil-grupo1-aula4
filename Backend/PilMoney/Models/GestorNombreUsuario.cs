using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace PilMoney.Models
{
    public class GestorNombreUsuario
    {
        public NombreUsuario ObtenerNombreUsuario(string nm)
        {
            string StrConn = ConfigurationManager.ConnectionStrings["PilMoneyEntities"].ToString();
            NombreUsuario nombreUsuario = null;
            SqlConnection cx = new SqlConnection(StrConn);
            cx.Open();

            SqlCommand cm = new SqlCommand("obtenerNombreCompleto", cx);
            cm.CommandType = System.Data.CommandType.StoredProcedure;
            cm.Parameters.Add(new SqlParameter("@NombreCompleto", nm));
            SqlDataReader dr = cm.ExecuteReader();
            if (dr.Read())
            {
                string nombreCompleto = dr.GetString(0);

                nombreUsuario = new NombreUsuario(nombreCompleto);
            }
            dr.Close();
            cx.Close();

            return nombreUsuario;
        }

        }
    }