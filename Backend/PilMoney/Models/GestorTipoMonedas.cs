using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace PilMoney.Models
{
    public class GestorTipoMonedas
    {
        string StrConn = ConfigurationManager.ConnectionStrings["PilMoneyEntities"].ToString();

        public void RegistrarTipoMoneda(TipoMonedas nuevo)
        {
            SqlConnection cx = new SqlConnection(StrConn);
            cx.Open();

            SqlCommand cm = cx.CreateCommand();
            cm.CommandText = "INSERT INTO TipoMonedas(nombre) VALUES (@Nombre)";
            cm.Parameters.Add(new SqlParameter("@Nombre",  nuevo.Nombre ));

            cm.ExecuteNonQuery();

            cx.Close();
        }
        public void ModificarTipoMoneda(TipoMonedas tm)
        {
            SqlConnection cx = new SqlConnection(StrConn);
            cx.Open();

            SqlCommand cm = cx.CreateCommand();
            cm.CommandText = "UPDATE TipoMonedas SET nombre=@Nombre WHERE idTipoMoneda=@IdTipoMoneda";
            cm.Parameters.Add(new SqlParameter("@IdTipoMoneda", tm.IdTipoMoneda));
            cm.Parameters.Add(new SqlParameter("@Nombre", tm.Nombre));

            cm.ExecuteNonQuery();

            cx.Close();
        }
        public void EliminarTipoMoneda(int idTipoMoneda)
        {
            SqlConnection cx = new SqlConnection(StrConn);
            cx.Open();

            SqlCommand cm = cx.CreateCommand();
            cm.CommandText = "DELETE FROM TipoMonedas WHERE idTipoMoneda=@IdTipoMoneda";
            cm.Parameters.Add(new SqlParameter("@IdTipoMoneda", idTipoMoneda));

            cm.ExecuteNonQuery();

            cx.Close();

        }

        public List<TipoMonedas> ObtenerTipoMoneda()
        {
            List<TipoMonedas> tiposDeMonedas = new List<TipoMonedas>();

            SqlConnection cx = new SqlConnection(StrConn);
            cx.Open();

            SqlCommand cm = cx.CreateCommand();
            cm.CommandText = "SELECT * FROM TipoMonedas";

            SqlDataReader dr = cm.ExecuteReader();
            while (dr.Read())
            {
                int idTipoMoneda = dr.GetInt32(0);
                string nombre = dr.GetString(1);

                TipoMonedas tm = new TipoMonedas(idTipoMoneda, nombre);
                tiposDeMonedas.Add(tm);
            }

            dr.Close();
            cx.Close();

            return tiposDeMonedas;
        }


        public TipoMonedas ObtenerTipoMonedaPorId(int idTipoMoneda)
        {
            TipoMonedas tm = null;
            SqlConnection cx = new SqlConnection(StrConn);
            cx.Open();
            SqlCommand cm = cx.CreateCommand();
            cm.CommandText = "SELECT * FROM TipoMonedas WHERE idTipoMoneda=@IdTipoMoneda";
            cm.Parameters.Add(new SqlParameter("@IdTipoMoneda", idTipoMoneda));

            SqlDataReader dr = cm.ExecuteReader();
            if (dr.Read())
            {
                
                string nombre = dr.GetString(1);
               

                tm = new TipoMonedas(idTipoMoneda,nombre);
            }

            dr.Close();
            cx.Close();

            return tm;
        }
    }
}