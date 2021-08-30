using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace PilMoney.Models
{
    public class GestorContactos
    {
        string StrConn = ConfigurationManager.ConnectionStrings["PilMoneyEntities"].ToString();

        public void RegistrarContacto(Contactos nueva)
        {
            SqlConnection cx = new SqlConnection(StrConn);
            cx.Open();

            SqlCommand cm = cx.CreateCommand();
            cm.CommandText = "INSERT INTO Contactos(cvu, aliasContacto, cvuContacto) VALUES  (@CVU, @AliasContacto, @CVUContacto)";
            cm.Parameters.Add(new SqlParameter("@CVU", nueva.CVU));
            cm.Parameters.Add(new SqlParameter("@AliasContacto", nueva.AliasContacto));
            cm.Parameters.Add(new SqlParameter("@CVUContacto", nueva.CVUContacto));

            cm.ExecuteNonQuery();

            cx.Close();
        }

        public Contactos ObtenerContactoPorId(int idContacto)
        {
            Contactos c = null;

            SqlConnection cx = new SqlConnection(StrConn);
            cx.Open();

            SqlCommand cm = cx.CreateCommand();
            cm.CommandText = "SELECT * FROM Contactos WHERE idContacto=@IdContacto";
            cm.Parameters.Add(new SqlParameter("@IdContacto", idContacto));

            SqlDataReader dr = cm.ExecuteReader();
            if (dr.Read())
            {
             
                string cvu = dr.GetString(2);
                string aliasContacto = dr.GetString(1);
                string cvuContacto = dr.GetString(0);



                c = new Contactos(idContacto, cvu, aliasContacto, cvuContacto);
            }

            dr.Close();
            cx.Close();

            return c;

        }

        public List<Contactos> ListarContactos()
        {
            List<Contactos> lista = new List<Contactos>();

            SqlConnection cx = new SqlConnection(StrConn);
            cx.Open();

            SqlCommand cm = cx.CreateCommand();
            cm.CommandText = "SELECT * FROM Contactos";

            SqlDataReader dr = cm.ExecuteReader();
            while (dr.Read())
            {
                int idContacto = dr.GetInt32(3);
                string cvu = dr.GetString(2);
                string aliasContacto = dr.GetString(1);
                string cvuContacto = dr.GetString(0);

                Contactos c = new Contactos(idContacto, cvu, aliasContacto, cvuContacto);
                lista.Add(c);
            }

            dr.Close();
            cx.Close();

            return lista;
        }

        public void EliminarContacto(int idContacto)
        {
            SqlConnection cx = new SqlConnection(StrConn);
            cx.Open();

            SqlCommand cm = cx.CreateCommand();
            cm.CommandText = "DELETE FROM Contactos WHERE idContacto=@IdContacto";
            cm.Parameters.Add(new SqlParameter("@IdContacto", idContacto));

            cm.ExecuteNonQuery();

            cx.Close();

        }
    }
}