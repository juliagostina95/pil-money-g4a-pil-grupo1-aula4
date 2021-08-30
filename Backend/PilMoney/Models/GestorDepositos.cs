using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace PilMoney.Models
{
    public class GestorDepositos
    {
        string StrConn = ConfigurationManager.ConnectionStrings["PilMoneyEntities"].ToString();

        public void RegistrarDeposito(Depositos nueva)
        {
            SqlConnection cx = new SqlConnection(StrConn);
            cx.Open();

            SqlCommand cm = cx.CreateCommand();
            cm.CommandText = "INSERT INTO Depositos(importe, cvu, alias) VALUES (@Importe, @CVU, @Alias)";
            cm.Parameters.Add(new SqlParameter("@Importe", nueva.Importe));
            cm.Parameters.Add(new SqlParameter("@CVU", nueva.CVU));
            cm.Parameters.Add(new SqlParameter("@Alias", nueva.Alias));
            

            cm.ExecuteNonQuery();

            cx.Close();
        }

        public Depositos ObtenerDepositoPorId(int idDeposito)
        {
            Depositos d = null;

            SqlConnection cx = new SqlConnection(StrConn);
            cx.Open();

            SqlCommand cm = cx.CreateCommand();
            cm.CommandText = "SELECT * FROM Depositos WHERE idDeposito=@IdDeposito";
            cm.Parameters.Add(new SqlParameter("@IdDeposito", idDeposito));

            SqlDataReader dr = cm.ExecuteReader();
            if (dr.Read())
            {
                double importe = dr.GetDouble(1);
                string cvu = dr.GetString(2);
                string alias = dr.GetString(3);


                d = new Depositos(idDeposito, importe, cvu, alias);
            }

            dr.Close();
            cx.Close();

            return d;

        }

        public List<Depositos> ListarDeposito()
        {
            List<Depositos> lista = new List<Depositos>();

            SqlConnection cx = new SqlConnection(StrConn);
            cx.Open();

            SqlCommand cm = cx.CreateCommand();
            cm.CommandText = "SELECT * FROM Depositos";

            SqlDataReader dr = cm.ExecuteReader();
            while (dr.Read())
            {
                int idDeposito = dr.GetInt32(0);
                double importe = dr.GetDouble(1);
                string cvu = dr.GetString(2);
                string alias = dr.GetString(3);

                Depositos d = new Depositos(idDeposito, importe, cvu, alias);
                lista.Add(d);
            }

            dr.Close();
            cx.Close();

            return lista;
        }

        public void EliminarDeposito(int idDeposito)
        {
            SqlConnection cx = new SqlConnection(StrConn);
            cx.Open();

            SqlCommand cm = cx.CreateCommand();
            cm.CommandText = "DELETE FROM Depositos WHERE idDeposito=@IdDeposito";
            cm.Parameters.Add(new SqlParameter("@IdDeposito", idDeposito));

            cm.ExecuteNonQuery();

            cx.Close();

        }
    }
}