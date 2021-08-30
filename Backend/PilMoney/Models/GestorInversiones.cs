using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace PilMoney.Models
{
    public class GestorInversiones
    {
        string StrConn = ConfigurationManager.ConnectionStrings["PilMoneyEntities"].ToString();

        public void RegistrarInversion(Inversiones nuevo)
        {
            SqlConnection cx = new SqlConnection(StrConn);
            cx.Open();

            SqlCommand cm = cx.CreateCommand();
            cm.CommandText = "INSERT INTO Inversiones(tipoInversion, importe, fecha, renovacion, cvu) VALUES (@TipoInversion, @Importe, @Fecha, @Renovacion, @CVU)";
            cm.Parameters.Add(new SqlParameter("@TipoInversion", nuevo.TipoInversion));
            cm.Parameters.Add(new SqlParameter("@Importe", nuevo.Importe));
            cm.Parameters.Add(new SqlParameter("@Fecha", nuevo.Fecha));
            cm.Parameters.Add(new SqlParameter("@Renovacion", nuevo.Renovacion));
            cm.Parameters.Add(new SqlParameter("@CVU", nuevo.CVU));
            
            cm.ExecuteNonQuery();

            cx.Close();
        }

        public Inversiones ObtenerInversionPorId(int idInversion)
        {
            Inversiones i = null;

            SqlConnection cx = new SqlConnection(StrConn);
            cx.Open();

            SqlCommand cm = cx.CreateCommand();
            cm.CommandText = "SELECT * FROM Inversiones WHERE idInversion=@IdInversion";
            cm.Parameters.Add(new SqlParameter("@IdInversion", idInversion));

            SqlDataReader dr = cm.ExecuteReader();
            if (dr.Read())
            {
                string tipoInversion = dr.GetString(1);
                double importe = dr.GetDouble(2);
                System.DateTime fecha = dr.GetDateTime(3);
                byte renovacion = dr.GetByte(4);
                string cvu = dr.GetString(5);


                i = new Inversiones(idInversion, tipoInversion, importe, fecha, renovacion, cvu);
            }

            dr.Close();
            cx.Close();

            return i;

        }

        public List<Inversiones> ListarInversiones()
        {
            List<Inversiones> lista = new List<Inversiones>();

            SqlConnection cx = new SqlConnection(StrConn);
            cx.Open();

            SqlCommand cm = cx.CreateCommand();
            cm.CommandText = "SELECT * FROM Inversiones";

            SqlDataReader dr = cm.ExecuteReader();
            while (dr.Read())
            {
                int idInversion = dr.GetInt32(0);
                string tipoInversion = dr.GetString(1);
                double importe = dr.GetDouble(2);
                System.DateTime fecha = dr.GetDateTime(3);
                byte renovacion = dr.GetByte(4);
                string cvu = dr.GetString(5);


                Inversiones i = new Inversiones(idInversion, tipoInversion, importe, fecha, renovacion, cvu);
                lista.Add(i);
            }

            dr.Close();
            cx.Close();

            return lista;
        }

        public void EliminarInversion(int idInversion)
        {
            SqlConnection cx = new SqlConnection(StrConn);
            cx.Open();

            SqlCommand cm = cx.CreateCommand();
            cm.CommandText = "DELETE FROM Inversiones WHERE idInversion=@IdInversion";
            cm.Parameters.Add(new SqlParameter("@IdInversion", idInversion));

            cm.ExecuteNonQuery();

            cx.Close();

        }
    }
}