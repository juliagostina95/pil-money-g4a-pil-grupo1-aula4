using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace PilMoney.Models
{
    public class GestorCompras
    {
   

        public void RegistrarCompra(Compras nueva)
        {
            string StrConn = ConfigurationManager.ConnectionStrings["PilMoneyEntities"].ToString();
            SqlConnection cx = new SqlConnection(StrConn);
            
                cx.Open();

                SqlCommand cm = cx.CreateCommand();
                cm.CommandText = "INSERT INTO Compras(importe, fecha, cvu) VALUES (@Importe, @Fecha, @CVU)";
                cm.Parameters.Add(new SqlParameter("@Importe", nueva.Importe));
                cm.Parameters.Add(new SqlParameter("@Fecha", nueva.Fecha));
                cm.Parameters.Add(new SqlParameter("@CVU", nueva.CVU));

                cm.ExecuteNonQuery();

                cx.Close();
            
        }

        public Compras ObtenerComprasPorId(int idCompra)
        {
            string StrConn = ConfigurationManager.ConnectionStrings["PilMoneyEntities"].ToString();
            Compras c = null;

            SqlConnection cx = new SqlConnection(StrConn);
            cx.Open();

            SqlCommand cm = cx.CreateCommand();
            cm.CommandText = "SELECT * FROM Compras WHERE idCompra=@IdCompra";
            cm.Parameters.Add(new SqlParameter("@IdCompra", idCompra));

            SqlDataReader dr = cm.ExecuteReader();
            if (dr.Read())
            {
                double importe = dr.GetDouble(1);
                System.DateTime fecha = dr.GetDateTime(2);
                string cvu = dr.GetString(3);
               

                c = new Compras(idCompra, importe, fecha, cvu);
            }

            dr.Close();
            

            return c;

        }

        public List<Compras> ListarCompra()
        {
            string StrConn = ConfigurationManager.ConnectionStrings["PilMoneyEntities"].ToString();
            List<Compras> lista = new List<Compras>();

            SqlConnection cx = new SqlConnection(StrConn);
            cx.Open();

            SqlCommand cm = cx.CreateCommand();
            cm.CommandText = "SELECT * FROM Compras";

            SqlDataReader dr = cm.ExecuteReader();
            while (dr.Read())
            {
                int idCompra = dr.GetInt32(0);
                double importe = dr.GetDouble(1);
                System.DateTime fecha = dr.GetDateTime(2);
                string cvu = dr.GetString(3);

                Compras c = new Compras(idCompra, importe, fecha, cvu);
                lista.Add(c);
            }

            dr.Close();
            cx.Close();

            return lista;
        }

        public void EliminarCompra(int idCompra)
        {
            string StrConn = ConfigurationManager.ConnectionStrings["PilMoneyEntities"].ToString();
            SqlConnection cx = new SqlConnection(StrConn);
            cx.Open();

            SqlCommand cm = cx.CreateCommand();
            cm.CommandText = "DELETE FROM Compras WHERE idCompra=@IdCompra";
            cm.Parameters.Add(new SqlParameter("@IdCompra", idCompra));

            cm.ExecuteNonQuery();

            cx.Close();

        }
    }
}