using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;

namespace PilMoney.Models
{
    public class GestorUsuarios

    {
        string StrConn = ConfigurationManager.ConnectionStrings["PilMoneyEntities"].ToString();

        public void RegistrarUsuario(Usuarios nuevo)
        {

            string encriptedPassword = GetSha256(nuevo.Contraseña);
            string encriptedImagen = GetSha256Imagen(nuevo.imagenDNI);
            SqlConnection cx = new SqlConnection(StrConn);
            cx.Open();

            SqlCommand cm = cx.CreateCommand();
            cm.CommandText = "INSERT INTO Usuarios(cuil, email, contraseña, nombreCompleto, fechaNacimiento, telefono, ImagenDNI) VALUES (@CUIL, @Email, @Contraseña, @NombreCompleto, @FechaNacimiento, @Telefono,  @imagenDNI)";
            cm.Parameters.Add(new SqlParameter("@CUIL", nuevo.CUIL));
            cm.Parameters.Add(new SqlParameter("@Email", nuevo.Email));
            cm.Parameters.Add(new SqlParameter("@Contraseña", nuevo.Contraseña));
            cm.Parameters.Add(new SqlParameter("@NombreCompleto", nuevo.NombreCompleto));
            cm.Parameters.Add(new SqlParameter("@FechaNacimiento", nuevo.FechaNacimiento));
            cm.Parameters.Add(new SqlParameter("@Telefono", nuevo.Telefono));
            cm.Parameters.Add(new SqlParameter("@imagenDNI", encriptedImagen));


            cm.ExecuteNonQuery();

            cx.Close();

        }



        public void ModificarUsuario(Usuarios u)
        {
            SqlConnection cx = new SqlConnection(StrConn);
            cx.Open();

            SqlCommand cm = cx.CreateCommand();
            cm.CommandText = "UPDATE Usuarios SET telefono=@Telefono, nombreCompleto=@NombreCompleto, contraseña=@Contraseña, email=@Email WHERE idUsuario=@IdUsuario";
            cm.Parameters.Add(new SqlParameter("@Telefono", u.Telefono));
            cm.Parameters.Add(new SqlParameter("@NombreCompleto", u.NombreCompleto));
            cm.Parameters.Add(new SqlParameter("@Contraseña", u.Contraseña));
            cm.Parameters.Add(new SqlParameter("@Email", u.Email));
            cm.Parameters.Add(new SqlParameter("@IdUsuario", u.IdUsuario));

            cm.ExecuteNonQuery();

            cx.Close();
        }

        public List<Usuarios> ListarUsuarios()
        {
            List<Usuarios> lista = new List<Usuarios>();

            SqlConnection cx = new SqlConnection(StrConn);
            cx.Open();

            SqlCommand cm = cx.CreateCommand();
            cm.CommandText = "SELECT * FROM Usuarios";

            SqlDataReader dr = cm.ExecuteReader();
            while (dr.Read())
            {
                string cuil = dr.GetString(0);
                string email = dr.GetString(1);
                string contraseña = dr.GetString(2);
                string nombreCompleto = dr.GetString(3);
                System.DateTime fechaNacimiento = dr.GetDateTime(4);
                string telefono = dr.GetString(5);
                string imagenDNI = dr.GetString(7);

                int idUsuario = Convert.ToInt32(dr.GetValue(6) is DBNull ? 0 : dr.GetValue(6));

                Usuarios u = new Usuarios(cuil, email, contraseña, nombreCompleto, fechaNacimiento, telefono, imagenDNI, idUsuario);
                lista.Add(u);
            }

            dr.Close();
            cx.Close();

            return lista;
        }

        public string GetSha256(string str)
        {
            SHA256 sha256 = SHA256Managed.Create();
            ASCIIEncoding encoding = new ASCIIEncoding();
            byte[] stream = null;
            StringBuilder sb = new StringBuilder();
            stream = sha256.ComputeHash(encoding.GetBytes(str));
            for (int i = 0; i < stream.Length; i++) sb.AppendFormat("{0:x2}", stream[i]);
            return sb.ToString().ToUpper();

        }

        public string GetSha256Imagen(string str)
        {
            SHA256 sha256 = SHA256Managed.Create();
            ASCIIEncoding encoding = new ASCIIEncoding();
            byte[] stream = null;
            StringBuilder sb = new StringBuilder();
            stream = sha256.ComputeHash(encoding.GetBytes(str));
            for (int i = 0; i < stream.Length; i++) sb.AppendFormat("{0:x2}", stream[i]);
            return "0x" + sb.ToString().ToUpper();

        }

    

        



    }
}