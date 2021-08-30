using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace PilMoney.Models
{
    public class GestorVenta
    {
        string StrConn = ConfigurationManager.ConnectionStrings["PilMoneyEntities"].ToString();

        public void RegistrarVenta(Venta nueva)
        {
            SqlConnection cx = new SqlConnection(StrConn);
            cx.Open();

            SqlCommand cm = cx.CreateCommand();
            cm.CommandText = "INSERT INTO Venta(importe, fecha, cvu) VALUES (@Importe, @Fecha, @CVU)";
            cm.Parameters.Add(new SqlParameter("@Importe", nueva.Importe));
            cm.Parameters.Add(new SqlParameter("@Fecha", nueva.Fecha));
            cm.Parameters.Add(new SqlParameter("@CVU", nueva.CVU));

            cm.ExecuteNonQuery();

            cx.Close();
        }

        public Venta ObtenerVentaPorId(int idVenta)
        {
            Venta v = null;

            SqlConnection cx = new SqlConnection(StrConn);
            cx.Open();

            SqlCommand cm = cx.CreateCommand();
            cm.CommandText = "SELECT * FROM Venta WHERE idVenta=@IdVenta";
            cm.Parameters.Add(new SqlParameter("@IdVenta", idVenta));

            SqlDataReader dr = cm.ExecuteReader();
            if (dr.Read())
            {
                float importe = dr.GetFloat(1);
                System.DateTime fecha = dr.GetDateTime(2);
                string cvu = dr.GetString(3);


                v = new Venta(idVenta, importe, fecha, cvu);
            }

            dr.Close();
            cx.Close();

            return v;

        }

        public List<Venta> ListarVenta()
        {
            List<Venta> lista = new List<Venta>();

            SqlConnection cx = new SqlConnection(StrConn);
            cx.Open();

            SqlCommand cm = cx.CreateCommand();
            cm.CommandText = "SELECT * FROM Venta";

            SqlDataReader dr = cm.ExecuteReader();
            while (dr.Read())
            {
                int idVenta = dr.GetInt32(0);
                float importe = dr.GetFloat(1);
                System.DateTime fecha = dr.GetDateTime(2);
                string cvu = dr.GetString(3);

                Venta v = new Venta(idVenta, importe, fecha, cvu);
                lista.Add(v);
            }

            dr.Close();
            cx.Close();

            return lista;
        }

        public void EliminarVenta(int idVenta)
        {
            SqlConnection cx = new SqlConnection(StrConn);
            cx.Open();

            SqlCommand cm = cx.CreateCommand();
            cm.CommandText = "DELETE FROM Venta WHERE idVenta=@IdVenta";
            cm.Parameters.Add(new SqlParameter("@IdVenta", idVenta));

            cm.ExecuteNonQuery();

            cx.Close();

        }
    }
}