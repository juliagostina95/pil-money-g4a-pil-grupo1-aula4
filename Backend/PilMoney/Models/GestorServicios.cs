using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace PilMoney.Models
{
    public class GestorServicios
    {
        string StrConn = ConfigurationManager.ConnectionStrings["PilMoneyEntities"].ToString();

        public void RegistrarServicio(Servicios nuevo)
        {
            SqlConnection cx = new SqlConnection(StrConn);
            cx.Open();

            SqlCommand cm = cx.CreateCommand();
            cm.CommandText = "INSERT INTO Servicios(descripcion, fechaVencimiento, fechaPago, importe, entidad, estado, cvu) VALUES (@Descripcion, @FechaVencimiento, @FechaPago, @Importe, @Entidad, @Estado, @CVU)";
            cm.Parameters.Add(new SqlParameter("@Descripcion", nuevo.Descripcion));
            cm.Parameters.Add(new SqlParameter("@FechaVencimiento", nuevo.FechaVencimiento));
            cm.Parameters.Add(new SqlParameter("@FechaPago", nuevo.FechaPago));
            cm.Parameters.Add(new SqlParameter("@Importe", nuevo.Importe));
            cm.Parameters.Add(new SqlParameter("@Entidad", nuevo.Entidad));
            cm.Parameters.Add(new SqlParameter("@Estado", nuevo.Estado));
            cm.Parameters.Add(new SqlParameter("@CVU", nuevo.CVU));

            cm.ExecuteNonQuery();

            cx.Close();
        }

        public Servicios ObtenerServicioPorId(int idServicio)
        {
            Servicios s = null;

            SqlConnection cx = new SqlConnection(StrConn);
            cx.Open();

            SqlCommand cm = cx.CreateCommand();
            cm.CommandText = "SELECT * FROM Servicios WHERE idServicio=@IdServicio";
            cm.Parameters.Add(new SqlParameter("@IdServicio", idServicio));

            SqlDataReader dr = cm.ExecuteReader();
            if (dr.Read())
            {
                string descripcion = dr.GetString(1);
                System.DateTime fechaVencimiento= dr.GetDateTime(2);
                System.DateTime fechaPago = dr.GetDateTime(3);
                double importe = dr.GetDouble(4);
                string entidad = dr.GetString(5);
                byte estado = dr.GetByte(6);
                string cvu = dr.GetString(7);


                s = new Servicios(idServicio, descripcion, fechaVencimiento, fechaPago, importe, entidad, estado, cvu);
            }

            dr.Close();
            cx.Close();

            return s;

        }

        public List<Servicios> ListarServicios()
        {
            List<Servicios> lista = new List<Servicios>();

            SqlConnection cx = new SqlConnection(StrConn);
            cx.Open();

            SqlCommand cm = cx.CreateCommand();
            cm.CommandText = "SELECT * FROM Servicios";

            SqlDataReader dr = cm.ExecuteReader();
            while (dr.Read())
            {
                int idServicio = dr.GetInt32(0);
                string descripcion = dr.GetString(1);
                System.DateTime fechaVencimiento = dr.GetDateTime(2);
                System.DateTime fechaPago = dr.GetDateTime(3);
                double importe = dr.GetDouble(4);
                string entidad = dr.GetString(5);
                byte estado = dr.GetByte(6);
                string cvu = dr.GetString(7);



               Servicios s = new Servicios(idServicio, descripcion, fechaVencimiento, fechaPago, importe, entidad, estado, cvu);
                lista.Add(s);
            }

            dr.Close();
            cx.Close();

            return lista;
        }

        public void EliminarServicio(int idServicio)
        {
            SqlConnection cx = new SqlConnection(StrConn);
            cx.Open();

            SqlCommand cm = cx.CreateCommand();
            cm.CommandText = "DELETE FROM Servicios WHERE idServicio=@IdServicio";
            cm.Parameters.Add(new SqlParameter("@IdServicio", idServicio));

            cm.ExecuteNonQuery();

            cx.Close();

        }
    }
}