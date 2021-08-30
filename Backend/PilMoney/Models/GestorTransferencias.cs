using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace PilMoney.Models
{
    public class GestorTransferencias
    {
 
            string StrConn = ConfigurationManager.ConnectionStrings["PilMoneyEntities"].ToString();

            public void RegistrarTransferencia(Transferencias nueva)
            {
                SqlConnection cx = new SqlConnection(StrConn);
                cx.Open();

                SqlCommand cm = cx.CreateCommand();
                cm.CommandText = "INSERT INTO Transferencias(fecha, importe, idContacto, cvu, cvuDestino, aliasDestino) VALUES (@Fecha, @Importe, @IdContacto, @CVU, @CVUDestino, @AliasDestino)";
                cm.Parameters.Add(new SqlParameter("@Fecha", nueva.Fecha));
                cm.Parameters.Add(new SqlParameter("@Importe", nueva.Importe));
                cm.Parameters.Add(new SqlParameter("@IdContacto", nueva.IdContacto));
                cm.Parameters.Add(new SqlParameter("@CVU", nueva.CVU));
                cm.Parameters.Add(new SqlParameter("@CVUDestino", nueva.CVUDestino));
                cm.Parameters.Add(new SqlParameter("@AliasDestino", nueva.AliasDestino));

            cm.ExecuteNonQuery();

                cx.Close();
            }

            public Transferencias ObtenerTransferenciasPorId(int idTransferencia)
            {
                Transferencias t = null;

                SqlConnection cx = new SqlConnection(StrConn);
                cx.Open();

                SqlCommand cm = cx.CreateCommand();
                cm.CommandText = "SELECT * FROM Transferencias WHERE idTransferencia=@IdTransferencia";
                cm.Parameters.Add(new SqlParameter("@IdTransferencia", idTransferencia));

                SqlDataReader dr = cm.ExecuteReader();
                if (dr.Read())
                {
                    System.DateTime fecha = dr.GetDateTime(1);
                    double importe = dr.GetDouble(2);
                    int idContacto = dr.GetInt32(3);
                    string cvu = dr.GetString(4);
                    string cvuDestino = dr.GetString(5);
                    string aliasDestino = dr.GetString(6);


                    t = new Transferencias(idTransferencia, fecha, importe, idContacto, cvu, cvuDestino, aliasDestino);
                }

                dr.Close();
                cx.Close();

                return t;

            }

            public List<Transferencias> ListarTransferencia()
            {
                List<Transferencias> lista = new List<Transferencias>();

                SqlConnection cx = new SqlConnection(StrConn);
                cx.Open();

                SqlCommand cm = cx.CreateCommand();
                cm.CommandText = "SELECT * FROM Transferencias";

                SqlDataReader dr = cm.ExecuteReader();
                while (dr.Read())
                {
                    int idTransferencia = dr.GetInt32(0);
                    System.DateTime fecha = dr.GetDateTime(1);
                    double importe = dr.GetDouble(2);
                    int idContacto = dr.GetInt32(3);
                    string cvu = dr.GetString(4);
                    string cvuDestino = dr.GetString(5);
                    string aliasDestino = dr.GetString(6);

                Transferencias t = new Transferencias(idTransferencia, fecha, importe, idContacto, cvu, cvuDestino, aliasDestino);
                lista.Add(t);
                }

                dr.Close();
                cx.Close();

                return lista;
            }

            public void EliminarTransferencia(int idTransferencia)
            {
                SqlConnection cx = new SqlConnection(StrConn);
                cx.Open();

                SqlCommand cm = cx.CreateCommand();
                cm.CommandText = "DELETE FROM Transferencias WHERE idTransferencia=@IdTransferencia";
                cm.Parameters.Add(new SqlParameter("@IdTransferencia", idTransferencia));

                cm.ExecuteNonQuery();

                cx.Close();

            }
        }
}