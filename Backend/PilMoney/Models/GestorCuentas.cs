using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace PilMoney.Models
{
    public class GestorCuentas

    {
        string StrConn = ConfigurationManager.ConnectionStrings["PilMoneyEntities"].ToString();

        public void RegistrarCuenta(Cuentas nueva)
        {
            SqlConnection cx = new SqlConnection(StrConn);
            cx.Open();

            SqlCommand cm = cx.CreateCommand();
            cm.CommandText = "INSERT INTO Cuentas(cvu, alias, saldo, tipoDeCaja, idTipoMoneda, cuil) VALUES (@CVU, @Alias, @Saldo, @TipoDeCaja, @IdTipoMoneda, @CUIL)";
            cm.Parameters.Add(new SqlParameter("@CVU", nueva.CVU));
            cm.Parameters.Add(new SqlParameter("@Alias", nueva.Alias));
            cm.Parameters.Add(new SqlParameter("@Saldo", nueva.Saldo));
            cm.Parameters.Add(new SqlParameter("@TipoDeCaja", nueva.TipoDeCaja));
            cm.Parameters.Add(new SqlParameter("@IdTipoMoneda", nueva.IdTipoMoneda));
            cm.Parameters.Add(new SqlParameter("@CUIL", nueva.CUIL));

            cm.ExecuteNonQuery();

            cx.Close();
        }

        public List<Cuentas> ListarCuenta()
        {
            List<Cuentas> lista = new List<Cuentas>();

            SqlConnection cx = new SqlConnection(StrConn);
            cx.Open();

            SqlCommand cm = cx.CreateCommand();
            cm.CommandText = "SELECT * FROM Cuentas";

            SqlDataReader dr = cm.ExecuteReader();
            while (dr.Read())
            {
                string cvu = dr.GetString(0);
                string alias = dr.GetString(2);
                double saldo = dr.GetDouble(1);
                string tipoDeCaja = dr.GetString(3);
                int idtipoMoneda = dr.GetInt32(4);
                string cuil = dr.GetString(5);


                Cuentas c = new Cuentas(cvu, saldo, alias, tipoDeCaja, idtipoMoneda, cuil);
                lista.Add(c);
            }

            dr.Close();
            cx.Close(); 

            return lista;
        }

        
    }
}