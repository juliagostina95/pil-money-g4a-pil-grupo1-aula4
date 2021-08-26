using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace PilMoney.Models
{
    public class GestorUsuarios

    {
        string StrConn = ConfigurationManager.ConnectionStrings["PilMoneyEntities"].ToString();

        public void RegistrarUsuario(Usuarios nuevo)
        {
            SqlConnection cx = new SqlConnection(StrConn);
            cx.Open();

            SqlCommand cm = cx.CreateCommand();
            cm.CommandText = "INSERT INTO Usuarios(cuil, email, contraseña, nombreCompleto, fechaNacimiento, telefono, imagenDNI) VALUES (@CUIL, @Email, @Contraseña, @NombreCompleto, @FechaNacimiento, @Telefono, @ImagenDNI)";
            cm.Parameters.Add(new SqlParameter("@CUIL", nuevo.CUIL));
            cm.Parameters.Add(new SqlParameter("@Email", nuevo.Email));
            cm.Parameters.Add(new SqlParameter("@Contraseña", nuevo.Contrase));
            cm.Parameters.Add(new SqlParameter("@NombreCompleto", nuevo.NombreCompleto));
            cm.Parameters.Add(new SqlParameter("@Telefono", nuevo.Telefono));
            cm.Parameters.Add(new SqlParameter("@ImagenDNI", nuevo.ImagenDNI));


            cm.ExecuteNonQuery();

            cx.Close();
        }

        public void ModificarUsuario(Usuarios u)
        {
            SqlConnection cx = new SqlConnection(StrConn);
            cx.Open();

            SqlCommand cm = cx.CreateCommand();
            cm.CommandText = "UPDATE Usuarios SET telefono=@Telefono, nombreCompleto=@NombreCompleto, contraseña=@Contraseña, email=@Email WHERE cuil=@CUIL";
            cm.Parameters.Add(new SqlParameter("@CUIL", u.CUIL));
            cm.Parameters.Add(new SqlParameter("@Telefono", u.Telefono));
            cm.Parameters.Add(new SqlParameter("@NombreCompleto", u.NombreCompleto));
            cm.Parameters.Add(new SqlParameter("@Contraseña", u.Contrase));
            cm.Parameters.Add(new SqlParameter("@Email", u.Email));

            cm.ExecuteNonQuery();

            cx.Close();
        }

    }
}